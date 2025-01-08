<?php

use App\Http\Controllers\DashBoard\LicenseController;
use App\Http\Controllers\DashBoard\DashboardController;
use App\Http\Controllers\DashBoard\ProfileController;
use App\Http\Controllers\DashBoard\ProjectController;
use App\Http\Controllers\DashBoard\TaskController;
use App\Http\Controllers\DashBoard\UserController;
use App\Http\Controllers\DashBoard\EditsController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutingController;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

        Route::resource('project', ProjectController::class);
        Route::patch('/edits/upvisibility', [ProjectController::class, 'visibility'])->name('edits.visibility');
        Route::get('/task/my-tasks', [TaskController::class, 'myTasks'])->name('task.myTasks');
        Route::get('/license/export', [LicenseController::class, 'export'])->name('license.export');
        Route::resource('task', TaskController::class);
        Route::resource('license', LicenseController::class);
        Route::resource('user', UserController::class);
        Route::resource('edits', EditsController::class);


    // Route::get('{any}', [RoutingController::class, 'handle'])->where('any', '.*');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

