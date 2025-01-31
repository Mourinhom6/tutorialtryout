<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\ToArray;

use Illuminate\Support\Collection;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Style\Color;

use App\Models\Chapa;
use App\Models\Course;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class ChapaImport implements WithEvents
{
    public $chapas = [];
    private $currentChapa = null;
    private $skipNextRow = false;


    // public function calculations()
    // {
    //     $allChapas = Chapa::with('courses')->get();
    //     foreach ($allChapas as $chapa) {
    //         try {
    //             Log::info("Processing calculations for chapa ID: {$chapa->id} with " . $chapa->courses->count() . " courses.");

    //             // Calculate total driving time in seconds
    //             $totalDrivingSeconds = 0;
    //             foreach ($chapa->courses as $course) {
    //                 $timeParts = explode(':', $course->conducao);
    //                 $seconds = ($timeParts[0] * 3600) + ($timeParts[1] * 60) + ($timeParts[2] ?? 0);
    //                 $totalDrivingSeconds += $seconds;
    //             }

    //             // Set the calculated values
    //             $chapa->tmp_driving = gmdate('H:i:s', $totalDrivingSeconds);
    //             $chapa->KMS = $chapa->courses->sum('kilometers');

    //             // Calculate amplitude and pausa
    //             $sortedCourses = $chapa->courses->sortBy('hora_ida');
    //             if ($sortedCourses->isNotEmpty()) {
    //                 $start = Carbon::parse($sortedCourses->first()->hora_ida);
    //                 $end = Carbon::parse($sortedCourses->last()->hora_chegada);


    //                 Log::info("Chapa ID853: {$chapa->id} - Test Variable: {$start} {$end}");


    //                 $chapa->amplitude = $end->diff($start)->format('%H:%i:%s');




    //                 // $tempstuff = $chapa->amplitude;

    //                 // $tempcalc = explode(':', $tempstuff);
    //                 // $secondscalc = ($tempcalc[0] * 3600) + ($tempcalc[1] * 60) + ($tempcalc[2] ?? 0);
    //                 // $totalDrivingsecondscalc += $secondscalc;


    //                 // $secondsamplitide = Carbon::parse($tempstuff)->secondsSinceMidnight();
    //                 // $tempstuff = $chapa->amplitude;


    //                 // list($hoursamptuta, $minutesamptuta, $secondsamptuta) = explode(':',  $tempstuff);
    //                 // $secondsamplitide = ($hoursamptuta * 3600) + ($minutesamptuta * 60) + $secondsamptuta;



    //                 // $pausaSeconds = $secondscalc - $totalDrivingSeconds;


    //                 // Log::info("Chapa ID33853: {$chapa->id} - Pausa seconds: {$pausaSeconds}, {$tempstuff}");

    //                 // $chapa->tmp_pausa = gmdate('H:i:s', $pausaSeconds);
    //                 $temp2 = $end->diff($start);


    //                 Log::info("Chapa gigigii: { $chapa->amplitude} --|-||-|- {$temp2}");


    //                 $thisit = $temp2->diff($chapa->tmp_driving)->format('%H:%i:%s');

    //                 Log::info("Chapa ID33853: {$chapa->id} - {$thisit}");


    //                 $start2 = Carbon::parse($sortedCourses->first()->hora_ida)->format('%H:%i:%s');
    //                 $end2 = Carbon::parse($sortedCourses->last()->hora_chegada)->format('%H:%i:%s');
    //                 $timpopo=$this->calculateTimeDifference($start2, $end2);

    //                 $chapa->tmp_pausa=$this->calculateTimeDifference($timpopo, $chapa->tmp_driving);

    //                 // Log::info("Chapa ID33853: {$chapa->id} - {$thisit} Pausa seconds: {$pausaSeconds}, P: {$chapa->tmp_pausa} {$tempstuff}");
    //                 $chapa->tmp_pausa = $thisit;
    //             }

    //             // Calculate extra hours
    //             $ex_heur = 0;
    //             if($totalDrivingSeconds > 28800) {
    //                 $ex_heur = $totalDrivingSeconds - 28800;
    //             }
    //             $chapa->extra_hours = gmdate('H:i:s', $ex_heur);

    //             $chapa->save();

    //             Log::info("Calculations completed for chapa ID: {$chapa->id}", [
    //                 'driving_time' => $chapa->tmp_driving,
    //                 'kilometers' => $chapa->KMS,
    //                 'amplitude' => $chapa->amplitude,
    //                 'pausa' => $chapa->tmp_pausa,
    //                 'extra_hours' => $chapa->extra_hours
    //             ]);

    //         } catch (\Exception $e) {
    //             Log::error("Error processing calculations for chapa ID: {$chapa->id}", [
    //                 'error' => $e->getMessage(),
    //                 'trace' => $e->getTraceAsString()
    //             ]);
    //         }
    //     }
    // }



    public function calculations()
{
    $allChapas = Chapa::with('courses')->get();
    foreach ($allChapas as $chapa) {
        // try {
            Log::info("Processing calculations for chapa ID: {$chapa->id} with " . $chapa->courses->count() . " courses.");

            // Calculate total driving time in seconds
            $totalDrivingSeconds = 0;
            foreach ($chapa->courses as $course) {
                $timeParts = explode(':', $course->conducao);
                $seconds = ($timeParts[0] * 3600) + ($timeParts[1] * 60);
                $totalDrivingSeconds += $seconds;
            }

            // Set driving time and kilometers
            $chapa->tmp_driving = gmdate('H:i:s', $totalDrivingSeconds);
            $chapa->KMS = $chapa->courses->sum('kilometers');

            // Calculate amplitude and pausa
            $sortedCourses = $chapa->courses->sortBy('hora_ida');
            if ($sortedCourses->isNotEmpty()) {
                // Get earliest start and latest end
                $start = Carbon::parse($chapa->courses->min('hora_ida'));
                $end = Carbon::parse($chapa->courses->max('hora_chegada'));

                // Calculate amplitude
                $amplitudeInterval = $end->diff($start);
                // $chapa->amplitude = $amplitudeInterval->format('%H:%i:%s');


                // Calculate amplitude

                // $amplitudeString = $amplitudeInterval->format('%h hours %i minutes');
                // $chapa->amplitude = $this->convertToTimeString($amplitudeInterval);

                $amplitudeString = $amplitudeInterval->format('%h:%i:00');
                // $chapa->amplitude = $amplitudeString;

                Log::info("amplitudeamplitudeamplitude: {$amplitudeString} -/-/ {$amplitudeString} -/-/ {$chapa->amplitude} ");




                // Calculate pausa: amplitude - driving_time
                $chapa->tmp_pausa = $this->calculateTimeDifference($chapa->tmp_driving, $amplitudeInterval);

                Log::info("Chapa ID: {$chapa->id} - Amplitude: {$chapa->amplitude}, Pausa: {$chapa->tmp_pausa}");
            }

            // Calculate extra hours
            $ex_heur = max($totalDrivingSeconds - 28800, 0); // 28800s = 8h
            $chapa->extra_hours = gmdate('H:i:s', $ex_heur);

            $chapa->save();

            Log::info("Calculations completed for chapa ID: {$chapa->id}", [
                'driving_time' => $chapa->tmp_driving,
                'kilometers' => $chapa->KMS,
                'amplitude' => $chapa->amplitude,
                'pausa' => $chapa->tmp_pausa,
                'extra_hours' => $chapa->extra_hours
            ]);
        // } catch (\Exception $e) {
        //     Log::error("Error processing chapa ID: {$chapa->id}", [
        //         'error' => $e->getMessage(),
        //         'trace' => $e->getTraceAsString()
        //     ]);
        // }
    }
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
                    'conducao' => $this->calculateConducao($courseData['hour_of_beginning'], $courseData['hour_of_ending']),
                ]);
            }
        }





        //     $courses = $chapa->courses;

        // try {
        //     Log::info("Processing chapa ID: {$chapa->id} with " . $courses->count() . " courses.");

        //     // Calculate total driving time in seconds first
        //     $totalDrivingSeconds = 0;
        //     foreach ($courses as $course) {
        //         // Convert HH:MM:SS to seconds
        //         $timeParts = explode(':', $course->conducao);
        //         $seconds = ($timeParts[0] * 3600) + ($timeParts[1] * 60) + $timeParts[2];
        //         $totalDrivingSeconds += $seconds;
        //     }

        //     // Convert total seconds back to HH:MM:SS
        //     $chapa->tmp_driving = gmdate('H:i:s', $totalDrivingSeconds);

        //     // Sum kilometers (this should work fine as it's numeric)
        //     $chapa->KMS = $courses->sum('kilometers');

        //     Log::info("Chapa ID: {$chapa->id} - Total driving time: {$chapa->tmp_driving}, Total kilometers: {$chapa->KMS}");

        //     $sortedCourses = $courses->sortBy('hora_ida');

        //     if ($sortedCourses->isNotEmpty()) {
        //         $start = Carbon::parse($sortedCourses->first()->hora_ida);
        //         $end = Carbon::parse($sortedCourses->last()->hora_chegada);

        //         Log::info("Chapa ID: {$chapa->id} - Start time: {$start}, End time: {$end}");

        //         $chapa->amplitude = $end->diff($start)->format('%H:%i:%s');

        //         $amplitudeSeconds = $end->diffInSeconds($start);
        //         // Now we already have totalDrivingSeconds
        //         $pausaSeconds = $amplitudeSeconds - $totalDrivingSeconds;

        //         Log::info("Chapa ID: {$chapa->id} - Pausa seconds: {$pausaSeconds}");

        //         $chapa->tmp_pausa = gmdate('H:i:s', max(0, $pausaSeconds));

        //         Log::info("Chapa ID: {$chapa->id} - Pausa time: {$chapa->tmp_pausa}");
        //     }

        //     // Calculate driving hours from the total seconds
        //     $drivingHours = floor($totalDrivingSeconds / 3600);

        //     Log::info("Chapa ID: {$chapa->id} - Driving hours: {$drivingHours}");

        //     $chapa->extra_hours = max($drivingHours - 8, 0);

        //     Log::info("Chapa ID: {$chapa->id} - Extra hours: {$chapa->extra_hours}");

        //     $chapa->save();

        //     Log::info("Chapa ID: {$chapa->id} - Data saved successfully.");
        // } catch (\Exception $e) {
        //     Log::error("Error processing chapa ID: {$chapa->id}. Exception: {$e->getMessage()}", [
        //         'trace' => $e->getTraceAsString()
        //     ]);
        // }
    }
// }




    //         $courses = $chapa->courses;

    //         try {
    //             Log::info("Processing chapa ID: {$chapa->id} with " . $courses->count() . " courses.");

    //             $chapa->tmp_driving = $courses->sum('conducao');
    //             $chapa->KMS = $courses->sum('kilometers');
    //             Log::info("Chapa ID: {$chapa->id} - Total driving time: {$chapa->tmp_driving}, Total kilometers: {$chapa->KMS}");

    //             $sortedCourses = $courses->sortBy('hora_ida');

    //             if ($sortedCourses->isNotEmpty()) {
    //                 $start = Carbon::parse($sortedCourses->first()->hora_ida);
    //                 $end = Carbon::parse($sortedCourses->last()->hora_chegada);

    //                 Log::info("Chapa ID: {$chapa->id} - Start time: {$start}, End time: {$end}");

    //                 $chapa->amplitude = $end->diff($start)->format('%H:%i:%s');

    //                 Log::info("Chapa ID: {$chapa->id} - Amplitude: {$chapa->amplitude}");

    //                 $amplitudeSeconds = $end->diffInSeconds($start);
    //                 $drivingSeconds = Carbon::parse($chapa->tmp_driving)->secondsSinceMidnight();
    //                 $pausaSeconds = $amplitudeSeconds - $drivingSeconds;

    //                 Log::info("Chapa ID: {$chapa->id} - Pausa seconds: {$pausaSeconds}");

    //                 $chapa->tmp_pausa = gmdate('H:i:s', $pausaSeconds);

    //                 Log::info("Chapa ID: {$chapa->id} - Pausa time: {$chapa->tmp_pausa}");
    //             } else {
    //                 Log::warning("Chapa ID: {$chapa->id} - No courses found for amplitude calculation.");
    //             }

    //             $drivingHours = Carbon::parse($chapa->tmp_driving)->diffInHours();

    //             Log::info("Chapa ID: {$chapa->id} - Driving hours: {$drivingHours}");

    //             $chapa->extra_hours = max($drivingHours - 8, 0);

    //             Log::info("Chapa ID: {$chapa->id} - Extra hours: {$chapa->extra_hours}");

    //             $chapa->save();

    //             Log::info("Chapa ID: {$chapa->id} - Data saved successfully.");

    //         } catch (\Exception $e) {
    //             Log::error("Error processing chapa ID: {$chapa->id}. Exception: {$e->getMessage()}");
    //         }

    //     }
    // }

    // protected function truncateTables()
    // {
    //     DB::statement('SET FOREIGN_KEY_CHECKS=0;');

    //     $tables = ['courses', 'chapas'];

    //     foreach ($tables as $table) {
    //         DB::table($table)->truncate();
    //         DB::statement("ALTER TABLE {$table} AUTO_INCREMENT = 1;");
    //     }

    //     DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    // }


//     protected function truncateTables()
// {
//     try {
//         DB::beginTransaction();

//         DB::statement('SET FOREIGN_KEY_CHECKS=0;');

//         $tables = ['courses', 'chapas'];

//         foreach ($tables as $table) {
//             DB::table($table)->truncate();
//             DB::statement("ALTER TABLE {$table} AUTO_INCREMENT = 1;");
//         }

//         DB::statement('SET FOREIGN_KEY_CHECKS=1;');

//         DB::commit();
//     } catch (\Exception $e) {
//         DB::rollBack();
//         throw $e;
//     }
// }




    // public function registerEvents(): array
    // {
    //     return [
    //         AfterSheet::class => function (AfterSheet $event) {
    //             $sheet = $event->sheet->getDelegate();
    //             $this->processSheet($sheet);

    //             DB::beginTransaction();

    //             try {

    //                 $this->truncateTables();

    //                 $this->importData($this->chapas);

    //                 DB::commit();
    //             } catch (\Exception $e) {
    //                 DB::rollBack();
    //                 Log::error('Error during import process', ['exception' => $e->getMessage()]);
    //                 throw $e;
    //             }
    //         },
    //     ];
    // }

    public function registerEvents(): array
{
    return [
        AfterSheet::class => function (AfterSheet $event) {
            $sheet = $event->sheet->getDelegate();
            $this->processSheet($sheet);

            // $this->calculations($sheet);


            // Truncate FIRST (outside transaction)
            // $this->truncateTables();

            // Then start transaction for data import
            DB::beginTransaction();
            try {
                $this->importData($this->chapas);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('Error during import', ['exception' => $e]);
                throw $e;
            }
        },
    ];
}


    // public function getChapas()
    // {
    //     return $this->chapas;
    // }

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
            }



            if ($this->currentChapa !== null) {
                $cellF = $sheet->getCell([6, $rowIndex]);
                $cellC = $sheet->getCell([3, $rowIndex]);


                if (strtoupper(trim($cellF->getValue())) === 'TOTAL') {
                    if (strtoupper(trim($cellC->getValue())) === 'VERDE' || strtoupper(trim($cellC->getValue())) === 'AMARELA' || strtoupper(trim($cellC->getValue())) === 'VERMELHA') {
                        $this->currentChapa['color']=strtoupper(trim($cellC->getValue()));
                        Log::info('Makessense', ['name' => strtoupper(trim($cellC->getValue()))]);

                    }
                    else{
                        Log::info('Makes no Fucking sense', ['name' => $cellC]);

                    }
                    $this->finalizeCurrentChapa();

                } else {
                    $this->addCourseToChapa($sheet, $rowIndex);
                }
            }
        }

        if ($this->currentChapa !== null) {
            $this->finalizeCurrentChapa();
        }

        Log::info('Chapas processadas em JSON', ['chapas' => json_encode($this->chapas)]);


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
        $specialTypes = ['INTERVALO', 'ALMOÇO', 'JANTAR', 'PAUSA', 'DESLOCAÇÃO', 'CARREGAMENTO', 'INTERVALO TÉCNICA'];
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
        return str_starts_with($cellValue, 'CHAPA');
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

    private function addCourseToChapa(Worksheet $sheet, $rowIndex)
    {
        $courseType = "Total";
        $parsedLine = $sheet->getCell([3, $rowIndex])->getValue();

        if ($sheet->getCell([5, $rowIndex])->getValue() === $sheet->getCell([6, $rowIndex])->getValue()) {
            $courseType = "Circular";
        }
        else {
            if (str_ends_with($sheet->getCell([3, $rowIndex])->getValue(), 'P')) {
                $courseType = "Parcelar";
                $parsedLine = intval(substr($sheet->getCell([3, $rowIndex])->getValue(), 0, -1));
            }

        }
        if (strtoupper($sheet->getCell([3, $rowIndex])->getValue()) === 'TAMEGA') {
            $parsedLine = 555;
            // Log::info('YEStamegatamega', ['row' => $rowIndex, 'tamega' => $parsedLine]);
        }
        else{
            if (strtoupper($sheet->getCell([3, $rowIndex])->getValue()) === 'EG') {
                $parsedLine = 666;
                // Log::info('YEStamegatamega', ['row' => $rowIndex, 'tamega' => $parsedLine]);
            }
            else{
                if (strtoupper($sheet->getCell([3, $rowIndex])->getValue()) === 'ALU') {
                    $parsedLine = 777;
                    // Log::info('YEStamegatamega', ['row' => $rowIndex, 'tamega' => $parsedLine]);
                }
            }
        }


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
        Log::info('Curso adicionado à CHAPA', ['chapa' => $this->currentChapa['name'], 'course' => $course]);
    }

    private function finalizeCurrentChapa()
    {
        if (!empty($this->currentChapa['courses'])) {
            array_shift($this->currentChapa['courses']);
        }


        $this->currentChapa['color'] = $this->currentChapa['color'] ?? 'AZUL';


        $this->chapas[] = $this->currentChapa;
        // Log::info('CHAPA finalizada', [
        //     'name' => $this->currentChapa['name'],
        //     'color' => isset($this->currentChapa['color']) ? $this->currentChapa['color'] : 'AZUL',
        //     'total_courses' => count($this->currentChapa['courses'])
        // ]);
        $this->currentChapa = null;
    }






    private function calculateConducao($start, $end)
    // private function calculateConducao($start, $end, $chipytest)

{
    if (!$start || !$end) {
        return null;
    }
    $end2 = $end;
    if (Carbon::parse($end)->lessThan(Carbon::parse($start))) {

        $end2 = Carbon::parse($end)->addDay();
    }
    $ddd= Carbon::parse($start)->diff(Carbon::parse($end2))->format('%H:%I:%S');

    // Log::info('Calculando condução', ['start' => $start, 'end' => $end, 'end2' => $end2, 'duration' => $ddd, 'chipytest' => $chipytest]);
    return $ddd;
}







    private function parseTimeValue($value): string
    {
        if (is_numeric($value)) {
            return $this->convertExcelTimeToHours((float)$value);
        }
        return (string)$value;
    }
    private function parseNumberValue($value): float
    {
        if (is_numeric($value)) {
            return (float)$value;
        }
        return 0.0;
    }


    // private function convertToTimeString($intervalString) {
    //     preg_match('/(\d+)\s*hours?\s*(\d*)\s*minutes?/', $intervalString, $matches);

    //     Log::info("Original timeA: " . $intervalString . " alalalalaal" . $matches);

    //     $hours = isset($matches[1]) ? intval($matches[1]) : 0;
    //     $minutes = isset($matches[2]) ? intval($matches[2]) : 0;

    //     return sprintf('%02d:%02d:00', $hours, $minutes);
    // }



    private function convertToTimeString($intervalString) {
        preg_match('/(\d+)\s*hours?\s*(\d*)\s*minutes?/', $intervalString, $matches);

        Log::info("Original intervalString: " . $intervalString);
        Log::info("Matches array: " . json_encode($matches));

        $hours = isset($matches[1]) ? intval($matches[1]) : 0;
        $minutes = isset($matches[2]) ? intval($matches[2]) : 0;

        $thinktwice ="$hours:$minutes:00";


        Log::info("Hours: " . $hours . ", Minutes: " . $minutes. ", thinktwice: " . $thinktwice);

        return $thinktwice;

        // return sprintf('%02d:%02d:00', $hours, $minutes);
    }


    function calculateTimeDifference($timeA, $timeB) {
        Log::info("Original timeA: " . $timeA);

        preg_match('/(\d+)\s*hours?\s*(\d*)\s*minutes?/', $timeB, $matches);



        Log::info("Original intervalString: " . $timeB);
        Log::info("Matches array: " . json_encode($matches));

        $hours = isset($matches[1]) ? intval($matches[1]) : 0;
        $minutes = isset($matches[2]) ? intval($matches[2]) : 0;

        $thinktwice ="$hours:$minutes:00";


        Log::info("Hours: " . $hours . ", Minutes: " . $minutes. ", thinktwice: " . $thinktwice);

        // return $thinktwice;

        Log::info("Original timeB: " . $timeB);

        list($h1, $m1) = explode(':', substr($timeA, 0, 5)); // Extract HH:MM
        list($h2, $m2) = explode(':', substr($timeB, 0, 5));

        Log::info("Extracted timeA - Hours: " . $h1 . ", Minutes: " . $m1);
        Log::info("Extracted timeB - Hours: " . $h2 . ", Minutes: " . $m2);


        $h1 = (int)$h1; $m1 = (int)$m1;
        $h2 = (int)$h2; $m2 = (int)$m2;
        $diff = 0;

        if ($h1 == $h2) {
            $diff = $m1 - $m2;
        } else {
            // Step 1: Add (60 - B's minutes)
            $diff += 60 - $m2;
            $h2 += 1; // Adjust B's hour
            $m2 = 0;

            // Step 2: Add A's minutes
            $diff += $m1;
            $m2 = $m1; // Adjust B's minutes to match A's

            // Step 3: Add remaining hours difference
            $diff += ($h1 - $h2) * 60;
        }

        // Format result as HH:MM:SS
        $hours = (int)($diff / 60);
        $minutes = $diff % 60;
        return sprintf("%02d:%02d:00", $hours, $minutes);
    }

    private function convertExcelTimeToHours(float $excelTime): string
    {
        $totalMinutes = $excelTime * 24 * 60;
        $hours = floor($totalMinutes / 60);
        $minutes = $totalMinutes % 60;

        if ($minutes == 9 || $minutes == 19 || $minutes == 29 || $minutes == 39 || $minutes == 49 || $minutes == 4 || $minutes == 14 || $minutes == 24 || $minutes == 34 || $minutes == 44) {
            $minutes += 1;
        }
        else{
            if ($minutes == 59) {
                $minutes = 0;
                $hours += 1;
            }
        }
        if ($hours >= 24) {
            $hours -= 24;
        }

        return sprintf('%02d:%02d', $hours, $minutes);
    }
        // 'name',
        // 'color',
        // 'courses'[
        //         'line' ,
        //         'hour_of_beginning',
        //         'place_of_beginning',
        //         'place_of_ending',
        //         'hour_of_ending',
        //         'kms',
        //         'type',

        // ];
}
