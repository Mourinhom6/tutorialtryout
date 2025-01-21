<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'authUser' => function () {
                $user = Auth::user();

                // If user exists, transform it using the resource
                if ($user) {
                    return (new \App\Http\Resources\UserCrudResource($user))->toArray(request());
                }

                // If user doesn't exist, return a default structure
                return [
                    "id" => 1,
                    "name" => "Naomi Holt",
                    "email" => "naomiholt@gmail.com",
                    "photo" => "http://localhost/storage/photos/naomi.jpg",
                    'tipo' => 2,
                    "created_at" => now(),
                ];
            },
        ]);


        // $migrationsPath = database_path('migrations');
        // $directories = glob($migrationsPath.'/*', GLOB_ONLYDIR);
        // $paths = array_merge([$migrationsPath], $directories);
        // $this->loadMigrationsFrom($paths);


        $migrationsPath = database_path('migrations'); // Base migrations directory
        $directories = [
            $migrationsPath . '/devStage',  // Add the devStage directory
            $migrationsPath . '/ready'     // Add the ready directory
        ];
        $paths = array_merge([$migrationsPath], $directories);
        $this->loadMigrationsFrom($paths);


    }
}
