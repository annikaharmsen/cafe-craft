<?php

use App\Models\MenuCategory;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', function () {
    return Inertia::render('home', [
        'posts' => Post::orderBy('index')->with('image')->get()
    ]);
})->name('home');
Route::get('/menu', function () {
    return Inertia::render('menu', [
        'categories' => MenuCategory::orderBy('index')->with('image')->with('items')->get()
    ]);
})->name('menu');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
