<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use App\Models\License;
use App\Models\Blog;

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
            'email_verified_at' => now()
        ]);

        User::factory()->create([
            'name' => 'John Smith',
            'email' => 'john@example.com',
            'password' => bcrypt('123.321A'),
            'email_verified_at' => now()
        ]);

        Project::factory()
            ->count(30)
            ->hasTasks(30)
            ->create();

        License::factory()
        ->count(200)
        ->create();

        Blog::factory()
        ->count(200)
        ->create();
    }
}
