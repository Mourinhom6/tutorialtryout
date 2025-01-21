<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Collection;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class ChapaImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        $headers = array_keys($rows->first()->toArray());
        Log::info("Headers retrieved from the first row: ", $headers);
        $parsedData = [];
        foreach ($headers as $header) {
            try {

                if($header == 'chapa' || $header == 'hpartida' || $header == 'lpartida' || $header == 'hchegada' || $header == 'lchegada' || $header == 'linha' || $header == 'kms' || $header == 'conducao' || $header == 'pausa' || $header == 'hextra' || $header == 'hnoturna'){
                    Log::info("Collumn A, B and C: {$header}");
                    $parsedData[$header] = $header;
                }
                else{
                    Log::info("Header trash: {$header}");
                }
            } catch (\Exception $e) {
                Log::error("Error parsing header '{$header}': " . $e->getMessage());
                $parsedData[$header] = null;
            }
        }
        Log::info("Parsed dates from headers: ", $parsedData);

        foreach ($rows as $rowIndex => $row) {

            foreach ($row as $column => $value) {
                if (($column === 'hpartida' && is_numeric($value)) || ($column === 'hchegada'  && is_numeric($value)) || ($column === 'hnoturna'  && is_numeric($value))) {
                    $time = $this->convertExcelTimeToHours($value);
                    Log::info("Row {$rowIndex}, Column: {$column}, Original Value: {$value}, Converted Time: {$time}");
                    $row[$column] = $time;
                }
            }




            $chapa = $row['chapa'] ?? "empty";
            $hPartida = $row['hpartida'] ?? "empty";
            $lPartida = $row['lpartida'] ?? "empty";
            $hChegada = $row['hchegada'] ?? "empty";
            $lChegada = $row['lchegada'] ?? "empty";
            $linha = $row['linha'] ?? "empty";
            $kms = $row['kms'] ?? 0;
            $conducao = $row['conducao'] ?? "empty";
            $pausa = $row['pausa'] ?? "empty";
            $hExtra = $row['hextra'] ?? "empty";
            $hNoturna = $row['hnoturna'] ?? "empty";

            Log::warning("Missing {$rowIndex}. Filli with defaults. Data: ", [
                'chapa' => $chapa,
                'hpartida' => $hPartida,
                'lpartida' => $lPartida,
                'hchegada' => $hChegada,
                'lchegada' => $lChegada,
                'linha' => $linha,
                'kms' => $kms,
                'conducao' => $conducao,
                'pausa' => $pausa,
                'hExtra' => $hExtra,
                'hNoturna' => $hNoturna,
            ]);

            foreach ($parsedData as $originalHeader => $parsedDate) {
                if ($parsedDate) {
                    Log::info("Processed data: ", [
                        'chapa' => $chapa,
                        'hpartida' => $hPartida,
                        'lpartida' => $lPartida,
                        'hchegada' => $hChegada,
                        'lchegada' => $lChegada,
                        'linha' => $linha,
                        'kms' => $kms,
                        'conducao' => $conducao,
                        'pausa' => $pausa,
                        'hExtra' => $hExtra,
                        'hNoturna' => $hNoturna,
                    ]);
                }
            }
        }
    }
    private function convertExcelTimeToHours(float $excelTime): string
    {
        // Total minutes in a day
        $totalMinutes = $excelTime * 24 * 60;

        // Calculate hours and minutes
        $hours = floor($totalMinutes / 60);
        $minutes = $totalMinutes % 60;

        // Format as "HH:mm"
        return sprintf('%02d:%02d', $hours, $minutes);
    }
}
