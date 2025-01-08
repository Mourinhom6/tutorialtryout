<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Opening;
use App\Models\Props;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class OpeningFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->jobTitle(),
            'location' => fake()->city(),
            'type' => fake()->randomElement(['Full-time', 'Part-time', 'Contract', 'Internship']),
            'subsentence' => fake()->sentence(6, true),
            'who_we_are' => fake()->paragraph(3, true),
            'what_were_looking' => fake()->paragraph(3, true),
            'why_to_apply' => fake()->paragraph(2, true),
            'state' => fake()->randomElement(['published', 'archived']),
            'surroundings' => fake()->randomElement(['Departamento Gestão', 'Officina', 'Estrada', 'Controlo de Trafego', 'Departamento Humano']),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
    public function withProps($count = 3)
    {
        return $this->afterCreating(function (Opening $opening) use ($count) {
            $opening->props()->attach(Props::factory()->count($count)->create());
        });
    }
}
