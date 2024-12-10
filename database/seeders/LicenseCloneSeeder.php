<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\License;

class LicenseCloneSeeder extends Seeder
{
    public function run()
    {
        // Fetch data from the external database
        $cloneData = DB::connection('mysql2nd')->table('licenses')->get();

        foreach ($cloneData as $data) {
            // Insert into the licenses table
            License::create([
                'NUM' => $data->NUM,
                'NOME' => $data->NOME,
                'TIPO' => $data->TIPO,
                'ATRIBUICAO' => $data->ATRIBUICAO,
                'EXPIRE_DATE' => $data->EXPIRE_DATE,
                'EXTRA' => $data->EXTRA,
                'TIME_EXPANSE' => $data->TIME_EXPANSE,
                'STATE' => $data->STATE,
            ]);
        }
    }
}

