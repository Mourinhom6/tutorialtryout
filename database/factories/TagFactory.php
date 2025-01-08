<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class TagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->unique()->randomElement(['Eventos', 'Aquisições & Concursos', 'Sustentabilidade', 'Avisos Gerais']),
            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => fake()->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
// fake()
// ->randomElement([['Eventos', 'Aquisições & Concursos', 'Sustentabilidade', 'Avisos Gerais'),
// ->randomElement(['Eventos', 'Aquisições & Concursos', 'Sustentabilidade', 'Avisos Gerais']),
