<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('dashboard', function () {
    return Inertia::render('dashboard/index');
})->name('dashboard');

Route::get('profile', [ProfileController::class, 'edit'])->name('profile');
Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');

require __DIR__ . './auth.php';
