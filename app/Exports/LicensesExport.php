<?php

namespace App\Exports;

use App\Models\License;
use Maatwebsite\Excel\Concerns\FromCollection;

use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LicensesExport implements FromCollection, ShouldAutoSize, WithHeadings
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
}
