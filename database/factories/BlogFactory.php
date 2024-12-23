<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'img' => fake()
            ->randomElement(['https://picsum.photos/800/450?random=1', 'https://picsum.photos/800/450?random=2', 'https://picsum.photos/800/450?random=3', 'https://picsum.photos/800/450?random=4']),
            'tag' => fake()
            ->randomElement(['Engineering', 'Product', 'Design', 'Company']),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'authors_name' => fake()->name(),
            'date' => fake()->dateTimeBetween('now', '+1 year'),

        ];
    }
}
