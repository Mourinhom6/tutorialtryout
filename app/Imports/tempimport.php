<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use App\Models\Chapa;
use App\Models\Course;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class ChapaImport implements ToCollection, WithEvents
{
    public $chapas = [];
    private $currentChapa = null;
    private $skipNextRow = false;

    public function collection(Collection $rows)
    {
        // ToCollection implementation (not used here)
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();
                $this->processSheet($sheet);
            },
        ];
    }

    public function importData(array $chapasData)
    {
        foreach ($chapasData as $chapaData) {
            $chapa = Chapa::create([
                'chapa' => $chapaData['name'],
                'color' => $chapaData['color'],
            ]);

            foreach ($chapaData['courses'] as $courseData) {
                $chapa->courses()->create([
                    'linha' => $courseData['line'],
                    'type' => $courseData['type'],
                    'local_ida' => $courseData['place_of_beginning'],
                    'local_chegada' => $courseData['place_of_ending'],
                    'hora_ida' => $courseData['hour_of_beginning'],
                    'hora_chegada' => $courseData['hour_of_ending'],
                    'kilometers' => $courseData['kms'],
                ]);
            }
            // TODO: Add calculation logic for other fields
        }
    }

    protected function truncateTables()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('courses')->truncate();
        DB::table('chapas')->truncate();
        Schema::enableForeignKeyConstraints();
    }

    public function getChapas()
    {
        return $this->chapas;
    }

    private function processSheet(Worksheet $sheet)
    {
        Log::info('Iniciando processamento da chapa');
        $highestRow = $sheet->getHighestRow();

        for ($rowIndex = 1; $rowIndex <= $highestRow; $rowIndex++) {
            if ($this->isEmptyRow($sheet, $rowIndex) || $this->isSpecialRow($sheet, $rowIndex)) {
                continue;
            }
            if ($this->skipNextRow) {
                $this->skipNextRow = false;
                continue;
            }

            $cellE = $sheet->getCell([5, $rowIndex]);

            if ($this->isChapaHeaderRow($cellE)) {
                $this->processChapaHeader($sheet, $rowIndex, $cellE);
            } elseif ($this->currentChapa !== null) {
                $this->processChapaRow($sheet, $rowIndex);
            }
        }

        if ($this->currentChapa !== null) {
            $this->finalizeCurrentChapa();
        }

        Log::info('Processamento da chapa concluído', ['total_chapas' => count($this->chapas)]);
    }

    private function isEmptyRow(Worksheet $sheet, $rowIndex): bool
    {
        for ($col = 3; $col <= 7; $col++) {
            if (!empty(trim($sheet->getCell([$col, $rowIndex])->getValue()))) {
                return false;
            }
        }
        return true;
    }

    private function isSpecialRow(Worksheet $sheet, $rowIndex): bool
    {
        $specialTypes = ['INTERVALO', 'ALMOÇO', 'JANTAR', 'DESLOCAÇÃO'];
        for ($col = 3; $col <= 7; $col++) {
            $cellValue = strtoupper(trim($sheet->getCell([$col, $rowIndex])->getValue()));
            if (in_array($cellValue, $specialTypes)) {
                return true;
            }
        }
        return false;
    }

    private function isChapaHeaderRow($cell): bool
    {
        $cellValue = strtoupper(trim($cell->getValue()));
        return str_starts_with($cellValue, 'CHAPA') || str_starts_with($cellValue, 'TAREFEIRO');
    }

    private function processChapaHeader(Worksheet $sheet, $rowIndex, $cell)
    {
        $chapaName = trim(substr(strtoupper($cell->getValue()), 5));
        $this->currentChapa = [
            'name' => $chapaName,
            'color' => " ",
            'courses' => []
        ];
        $this->skipNextRow = true;
        Log::info('Nova CHAPA encontrada', ['name' => $chapaName]);
    }

    private function processChapaRow(Worksheet $sheet, $rowIndex)
    {
        $cellF = $sheet->getCell([6, $rowIndex]);
        $cellC = $sheet->getCell([3, $rowIndex]);

        if (strtoupper(trim($cellF->getValue())) === 'TOTAL') {
            $this->processTotalRow($cellC);
        } else {
            $this->addCourseToChapa($sheet, $rowIndex);
        }
    }

    private function processTotalRow($cellC)
    {
        $color = strtoupper(trim($cellC->getValue()));
        if (in_array($color, ['VERDE', 'AMARELA', 'VERMELHA'])) {
            $this->currentChapa['color'] = $color;
        }
        $this->finalizeCurrentChapa();
    }

    private function addCourseToChapa(Worksheet $sheet, $rowIndex)
    {
        $courseType = $this->determineCourseType($sheet, $rowIndex);
        $parsedLine = $this->parseLine($sheet, $rowIndex);

        $course = [
            'line' => $parsedLine,
            'hour_of_beginning' => $this->parseTimeValue($sheet->getCell([4, $rowIndex])->getValue()),
            'place_of_beginning' => $sheet->getCell([5, $rowIndex])->getValue(),
            'place_of_ending' => $sheet->getCell([6, $rowIndex])->getValue(),
            'hour_of_ending' => $this->parseTimeValue($sheet->getCell([7, $rowIndex])->getValue()),
            'kms' => round($this->parseNumberValue($sheet->getCell([11, $rowIndex])->getValue()), 4),
            'type' => $courseType,
        ];

        $this->currentChapa['courses'][] = $course;
    }

    private function determineCourseType(Worksheet $sheet, $rowIndex)
    {
        if ($sheet->getCell([5, $rowIndex])->getValue() === $sheet->getCell([6, $rowIndex])->getValue()) {
            return "Circular";
        }
        if (str_ends_with($sheet->getCell([3, $rowIndex])->getValue(), 'P')) {
            return "Parcelar";
        }
        return "Total";
    }

    private function parseLine(Worksheet $sheet, $rowIndex)
    {
        $lineValue = $sheet->getCell([3, $rowIndex])->getValue();
        if (strtoupper($lineValue) === 'TAMEGA') {
            return 999;
        }
        if (str_ends_with($lineValue, 'P')) {
            return intval(substr($lineValue, 0, -1));
        }
        return $lineValue;
    }

    private function finalizeCurrentChapa()
    {
        if (!empty($this->currentChapa['courses'])) {
            array_shift($this->currentChapa['courses']);
        }
        $this->currentChapa['color'] = $this->currentChapa['color'] ?? 'AZUL';
        $this->chapas[] = $this->currentChapa;
        $this->currentChapa = null;
    }

    private function parseTimeValue($value): string
    {
        return is_numeric($value) ? $this->convertExcelTimeToHours((float)$value) : (string)$value;
    }

    private function parseNumberValue($value): float
    {
        return is_numeric($value) ? (float)$value : 0.0;
    }

    private function convertExcelTimeToHours(float $excelTime): string
    {
        $totalMinutes = $excelTime * 24 * 60;
        $hours = floor($totalMinutes / 60);
        $minutes = $totalMinutes % 60;

        if (in_array($minutes, [9, 19, 29, 39, 49, 4, 14, 24, 34, 44])) {
            $minutes += 1;
        } elseif ($minutes == 59) {
            $minutes = 0;
            $hours += 1;
        }

        return sprintf('%02d:%02d', $hours, $minutes);
    }
}
