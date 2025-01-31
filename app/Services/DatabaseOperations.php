<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class DatabaseOperations
{
    public function truncateTables()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        $tables = ['courses', 'chapas'];

        foreach ($tables as $table) {
            DB::table($table)->truncate();
            DB::statement("ALTER TABLE {$table} AUTO_INCREMENT = 1;");
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
