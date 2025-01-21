<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\StatChart;
use App\Models\DataChart;
use Carbon\Carbon;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class DataChartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // static $date = null;
        // static $statChartId = null;

        // if ($date === null || $statChartId !== $this->statChart->id ?? null) {
        //     $date = Carbon::now()->subYear(); // Start from one year ago
        //     $statChartId = $this->statChart->id ?? null;
        // } else {
        //     $date = $date->addDay(); // Add one day for each new entry
        // }

        return [

            'datavalue' => fake()->numberBetween(100, 10000),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fake()->dateTimeBetween('-1 year', 'now'),
            // 'created_at' => $date,
            // 'updated_at' => $date,

        ];
    }
}
