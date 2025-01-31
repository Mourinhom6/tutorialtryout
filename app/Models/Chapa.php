<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Carbon\Carbon;
use Carbon\CarbonInterval;

class Chapa extends Model
{
    protected $fillable = [
        'chapa',
        'color',
        'amplitude',
        'tmp_driving',
        'tmp_pausa',
        'KMS',
        'escalador',
        'extra_hours',
        'night_hours'
    ];

    // protected $casts = [
    //     'amplitude' => 'time',
    //     'tmp_driving' => 'time',
    //     'tmp_pausa' => 'time',
    // ];

    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);
    }

    public function getAmplitudeAttribute()
    {
        if ($this->tmp_driving && $this->tmp_pausa) {
            $driving = Carbon::createFromFormat('H:i:s', $this->tmp_driving);
            $pause = Carbon::createFromFormat('H:i:s', $this->tmp_pausa);
            return $driving->addHours($pause->hour)->addMinutes($pause->minute)->format('H:i');
        }
        return null;
    }
}
