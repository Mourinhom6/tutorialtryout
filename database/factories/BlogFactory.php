<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Blog;
use App\Models\Tag;


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

            'img_main' => fake()
            ->randomElement(['https://picsum.photos/800/450?random=1', 'https://picsum.photos/800/450?random=2', 'https://picsum.photos/800/450?random=3', 'https://picsum.photos/800/450?random=4']),           'intro' => $this->faker->paragraph(),
            'text1' => fake()->paragraphs(3, true),
            'text2' => fake()->paragraphs(3, true),
            'title' => fake()->sentence(),
            'importance' => fake()->randomElement([1, 2, 3, 4, 5]),
            'subtitle' => fake()->sentence(),
            'size' => fake()->randomElement([5, 10, 30, 60]),
            'intro' => fake()->paragraph(),
            'text1' => fake()->paragraphs(3, true),
            'text2' => fake()->paragraphs(3, true),
            'state' => fake()->randomElement(['published', 'archived']),
            'date' => fake()->date(),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),

        ];
    }
    public function withTags($count = 3)
    {
        return $this->afterCreating(function (Blog $blog) use ($count) {
            $blog->tags()->attach(Tag::factory()->count($count)->create());
        });
    }

    public function withImages($count = 5)
    {
        return $this->afterCreating(function (Blog $blog) use ($count) {
            $blog->images()->createMany(
                collect(range(1, $count))->map(function ($index) {
                    return [
                        'img' => "https://picsum.photos/500/700?random={$index}",
                        'title' => fake()->word(),
                    ];
                })
            );
        });
    }
}
