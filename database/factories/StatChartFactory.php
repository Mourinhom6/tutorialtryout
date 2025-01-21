<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\StatCharts;
use App\Models\DataCharts;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class StatChartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [


            'title' =>  fake()->unique()->randomElement(['Motoristas', 'Reclamações', 'Smth1', 'Smth2', 'Smth3']),
            'created_at' => time(),
            'updated_at' => time(),
            // 'datavalue' => fake()->numberBetween(100, 1000000),
            // 'value' => fake()->numberBetween(100, 1000000),
            // 'interval' => 'Last 30 days',
            // 'trend' => fake()->randomElement(['up', 'down', 'neutral']),
            // 'data' => fake()->randomElement(range(100, 1500)),


        ];
    }
}
