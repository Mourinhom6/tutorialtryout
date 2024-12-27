<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(),
            'description' => fake()->realText(),
            'due_date' => fake()->dateTimeBetween('now', '+1 year'),
            'status' => fake()
                ->randomElement(['pending', 'in_progress', 'completed']),
            'priority' => fake()
                ->randomElement(['low', 'medium', 'high']),
            'image_path' => fake()
            ->randomElement(['https://picsum.photos/800/450?random=5', 'https://picsum.photos/800/450?random=6', 'https://picsum.photos/800/450?random=7', 'https://picsum.photos/800/450?random=8']),

            'assigned_user_id' => fake()->randomElement([1, 2]),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
