<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('dashboard', function () {
    return Inertia::render('dashboard/index');
})->middleware('auth')->name('dashboard');

require __DIR__ . './auth.php';
