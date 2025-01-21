<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatChart extends Model
{
    use HasFactory;

    protected $fillable = ['title'];

    protected $appends = ['value_percentage'];



    public function dataCharts()
    {
        return $this->hasMany(DataChart::class);
    }


    public function getValuePercentageAttribute()
    {

        // $oldestDataChart = $this->dataCharts->where('created_at', '>=', now()->subDays(30))->where('created_at', '<=', now())->sortBy('created_at')->first();
        // $newestDataChart = $this->dataCharts->where('created_at', '>=', now()->subDays(30))->where('created_at', '<=', now())->sortByDesc('created_at')->first();

        $oldestDataChart = $this->dataCharts->sortBy('created_at')->slice(29, 1)->first();
        $newestDataChart = $this->dataCharts->sortByDesc('created_at')->slice(29, 1)->first();


        // $oldestDataChart = $this->dataCharts
        //     ->where('created_at', '>=', now()->subDays(30))
        //     ->where('created_at', '<=', now())
        //     ->sortBy('created_at')
        //     ->first();

        // $newestDataChart = $this->dataCharts
        //     ->where('created_at', '>=', now()->subDays(30))
        //     ->where('created_at', '<=', now())
        //     ->sortByDesc('created_at')
        //     ->first();


        //$oldestDataChart = $this->dataCharts->sortBy('created_at')->first();
        //$newestDataChart = $this->dataCharts->sortByDesc('created_at')->first();

        if (!$oldestDataChart || !$newestDataChart || $oldestDataChart->datavalue == 0) {
            return 0;
        }

        $percentage = (($newestDataChart->datavalue - $oldestDataChart->datavalue) / $oldestDataChart->datavalue) * 100;

        return round($percentage, 1);
    }
}

    // public function getValuePercentageAttribute($period = '7d')
    // {
    //     $endDate = now();
    //     $startDate = $this->getStartDate($period);

    //     $oldestDataChart = $this->dataCharts
    //         ->where('created_at', '>=', $startDate)
    //         ->where('created_at', '<=', $endDate)
    //         ->sortBy('created_at')
    //         ->first();

    //     $newestDataChart = $this->dataCharts
    //         ->where('created_at', '>=', $startDate)
    //         ->where('created_at', '<=', $endDate)
    //         ->sortByDesc('created_at')
    //         ->first();

    //     if (!$oldestDataChart || !$newestDataChart || $oldestDataChart->datavalue == 0) {
    //         return 0; // or null, depending on how you want to handle this case
    //     }

    //     return (($newestDataChart->datavalue - $oldestDataChart->datavalue) / $oldestDataChart->datavalue) * 100;
    // }

    // private function getStartDate($period)
    // {
    //     switch ($period) {
    //         case '7d':
    //             return now()->subDays(7);
    //         case '30d':
    //             return now()->subDays(30);
    //         case '3m':
    //             return now()->subMonths(3);
    //         case '1y':
    //             return now()->subYear();
    //         case '5y':
    //             return now()->subYears(5);
    //         default:
    //             return now()->subDays(7); // Default to 7 days if invalid period
    //     }
    // }
// }
    // public function blogs()
    // {
    //     return $this->belongsToMany(Blog::class);
    // }
