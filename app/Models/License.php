<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;

    protected $fillable = [
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
