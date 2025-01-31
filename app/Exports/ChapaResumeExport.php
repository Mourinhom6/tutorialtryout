<?php

namespace App\Exports;

use App\Models\License;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PhpOffice\PhpSpreadsheet\Style\Border;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Style\Style;
use PhpOffice\PhpSpreadsheet\Style\Color;
use Maatwebsite\Excel\Concerns\WithDefaultStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ChapaResume implements FromCollection, ShouldAutoSize, WithHeadings, WithStyles, WithDefaultStyles
{
    public function collection()
    {
        return License::all();

        // return License::query()->chunk(1000, function ($records) {
        //     foreach ($records as $record) {
        //         yield $record;
        //     }
        // });
    }

    public function headings(): array
    {
        return [
            'CHAPA',
            'VIGOR',
            'COR',
            'LINHAS',
            'SÁBADO',
            'DOMINGO',
            '1ª HE',
            '2ª HE',
            'STATE',
            'L INICIO',
            'L CHEGADA',
            'H INICIO',
            'H CHEGADA',
            'AMPLITUDE',
            'HE',
            'INTERMITÊNCIA',
            'CONDUÇÃO',
            'KMS',

        ];
    }

    public function defaultStyles(Style $defaultStyle)
    {
        return [
            'borders' => [
                'all.Borders' => [
                    'borderStyle' => Border::BORDER_THIN,
                    'color' => ['argb' => '000000'],
                ],
            ],
            'alignment' => [
                'horizontal' => Alignment::HORIZONTAL_CENTER,
                'vertical' => Alignment::VERTICAL_CENTER,
            ],
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'borders' => [
                    'outline' => [
                        'borderStyle' => Border::BORDER_THICK,
                        'color' => ['argb' => '000000'],
                    ],
                ],
                'font' => [
                    'bold' => true,
                    'size' => 14,
                    'color' => ['rgb' => 'FFFFFF'],
                ],
                'alignment' => [
                    'horizontal' => Alignment::HORIZONTAL_CENTER,
                    'vertical' => Alignment::VERTICAL_CENTER,
                ],
                'fill' => [
                    'fillType' => Fill::FILL_SOLID,
                    'startColor' => [
                        'rgb' => '0f397d', // Light gray background
                    ],
                ],
            ],
        ];
    }
}
