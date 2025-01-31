<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Course extends Model
{
    protected $fillable = [
        'linha',
        'type',
        'local_chegada',
        'local_ida',
        'hora_ida',
        'hora_chegada',
        'conducao',
        'kilometers'
    ];

    // protected $casts = [
    //     'hora_ida' => 'time',
    //     'hora_chegada' => 'time',
    //     'conducao' => 'time',
    // ];

    public function chapa(): BelongsTo
    {
        return $this->belongsTo(Chapa::class);
    }
}
