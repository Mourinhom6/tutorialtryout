<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use App\Models\License;
use App\Models\Blog;
use App\Models\Tag;
use App\Models\Opening;
use App\Models\Prop;
use App\Models\DataChart;
use App\Models\StatChart;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Ricardo Mouro',
            'email' => 'ricardomxv10@gmail.com',
            'password' => bcrypt('APsE975@!PnkGqf'),
            'tipo' => 6,
            'email_verified_at' => now()
        ]);

        User::factory()->create([
            'name' => 'John Smith',
            'email' => 'john@example.com',
            'password' => bcrypt('123.321A'),
            'tipo' => 2,
            'email_verified_at' => now()
        ]);

        Prop::factory()->count(50)->create();


        // DataChart::factory()->count(4)->create();


        StatChart::factory()
            ->count(5)
            ->hasDataCharts(40)
            ->create();

        Tag::factory()->count(4)->create();


        Project::factory()
            ->count(200)
            ->hasTasks(15)
            ->create();

        License::factory()
        ->count(200)
        ->create();

        // Blog::factory()
        // ->count(200)
        // ->create();

        // Blog::factory()->count(200)->create()->each(function ($blog) {
        //     $blog->tags()->attach(Tag::inRandomOrder()->limit(rand(1, 4))->pluck('id'));
        //     if (rand(0, 1)) {  // 50% chance of having images
        //         $blog->images()->createMany(
        //             collect(range(1, rand(1, 17)))->map(function ($index) {
        //                 return [
        //                     'img' => "https://picsum.photos/500/700?random={$index}",
        //                     'title' => fake()->word(),
        //                 ];
        //             })
        //         );
        //     }
        // });


        Blog::factory()->count(200)->create()->each(function ($blog) {
        // Attach a random number of tags (1 to 4)
            $blog->tags()->attach(Tag::inRandomOrder()->limit(rand(1, 4))->pluck('id')->toArray());

            // 50% chance of having images
            if (rand(1, 100) <= 80) {
                $blog->images()->createMany(
                    collect(range(1, rand(1, 23)))->map(function ($index) {
                        // Generate random width and height between specified ranges
                        $width = rand(300, 800); // Random width between 300 and 800
                        $height = rand(300, 800); // Random height between 300 and 800
                        return [
                            'img' => "https://picsum.photos/{$width}/{$height}?random={$index}",
                            'title' => fake()->word(),
                        ];
                    })->toArray() // Convert the collection to an array
                );
            }
        });

        Opening::factory()->count(15)->create()->each(function ($opening) {
            // Attach a random number of tags (1 to 4)
            $opening->props()->attach(Prop::inRandomOrder()->limit(rand(1, 4))->pluck('id')->toArray());
        });

    }
}
