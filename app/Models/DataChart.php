<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataChart extends Model
{
    use HasFactory;

    protected $fillable = [
        'datavalue',
        'stat_chart_id',
    ];


    public function statChart()
    {
        return $this->belongsTo(StatChart::class);
    }


    // public function blogs()
    // {
    //     return $this->belongsToMany(Blog::class);
    // }
}
