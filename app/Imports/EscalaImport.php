<?php

namespace App\Imports;

use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Collection;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class EscalaImport implements ToCollection, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        $headers = array_keys($rows->first()->toArray());
        Log::info("Headers retrieved from the first row: ", $headers);
        $parsedDates = [];
        foreach ($headers as $header) {
            try {

                if (is_numeric($header)) {
                    Log::info("Processing numeric header: {$header}");
                    if ($header < 40000) {
                        Log::info("This is not a date it's just the periferics columns from the excel: {$header}");
                    }
                    else{
                        $excelStartDate = Carbon::createFromDate(1900, 1, 1)->subDay(2);
                        $parsedDates[$header] = $excelStartDate->addDays($header)->format('Y-m-d');
                    }


                } else {
                    Log::info("Processing string header: {$header}");

                    // Handle standard date format in the header
                    if($header == 'no' || $header == 'nome'|| $header == 'carro'){
                        Log::info("Collumn A, B and C: {$header}");

                    }
                    else{
                        $parsedDates[$header] = Carbon::createFromFormat('d/m/Y', $header)
                        ->startOfDay()
                        ->format('Y-m-d');
                    }
                }
            } catch (\Exception $e) {
                Log::error("Error parsing header '{$header}': " . $e->getMessage());
                $parsedDates[$header] = null;
            }
        }
        Log::info("Parsed dates from headers: ", $parsedDates);

        foreach ($rows as $rowIndex => $row) {
            $driverNumber = $row['no'] ?? 0;
            $driverName = $row['nome'] ?? "empty";
            $carNumber = $row['carro'] ?? 0;

            if (!$driverNumber || !$driverName || !$carNumber) {
                Log::warning("Missing essential driver data at row {$rowIndex}. Filling missing values with defaults. Data: ", [
                    'driver_number' => $driverNumber,
                    'driver_name' => $driverName,
                    'car_number' => $carNumber,
                ]);
            }
            foreach ($parsedDates as $originalHeader => $parsedDate) {
                if ($parsedDate) {
                    $course = $row[$originalHeader] ?? "empty";
                    Log::info("Processed data: ", [
                        'driver_number' => $driverNumber,
                        'driver_name' => $driverName,
                        'car_number' => $carNumber,
                        'date' => $parsedDate,
                        'course' => $course,
                    ]);

                    // Save or process this data as needed
                    // Example: Save to database
                    // DriverSchedule::create([
                    //     'driver_number' => $driverNumber,
                    //     'driver_name' => $driverName,
                    //     'car_number' => $carNumber,
                    //     'date' => $parsedDate,
                    //     'course' => $course,
                    // ]);
                }
            }
        }
    }
}
