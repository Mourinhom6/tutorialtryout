<?php

namespace App\Exports;

use App\Models\License;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class LicensesExport implements FromCollection, ShouldAutoSize, WithHeadings, WithStyles
{
    public function collection()
    {
        return License::all();
    }

    public function headings(): array
    {
        return [
            'NUM',
            'NOME',
            'TIPO',
            'ATRIBUICAO',
            'EXPIRE_DATE',
            'EXTRA',
            'TIME_EXPANSE',
            'STATE',
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => [
                    'bold' => true,
                    'size' => 14, // Increase font size
                ],
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                    'vertical' => Alignment::VERTICAL_CENTER,
                ],
                'fill' => [
                    'fillType' => Fill::FILL_SOLID,
                    'startColor' => [
                        'rgb' => 'CCCCCC', // Light gray background
                    ],
                ],
            ],
        ];
    }
}
