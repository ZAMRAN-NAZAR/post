<?php

use App\Http\Controllers\AuthorProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/register', [RegisterUserController::class, 'store']);

Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);
Route::delete('/logout', [SessionController::class, 'destroy'])->middleware('auth');

Route::get('/', [PostController::class, 'index']);

Route::controller(PostController::class)->middleware('auth')->group(function() {
    Route::get('/posts/create', 'create');
    Route::post('/posts', 'store');
    Route::get('/posts/{post}', 'show');

    Route::get('/posts/{post}/edit', 'edit')
        ->can('handle-post', 'post');

    Route::put('/posts/{post}', 'update')
        ->name('posts.update')
        ->can('handle-post', 'post');

    Route::delete('/posts/{post}', 'destroy')
        ->name('posts.destroy')
        ->can('handle-post', 'post');
});

Route::controller(UserProfileController::class)->middleware('auth')->group(function() {
    Route::get('/profile', 'index');
    Route::patch('/profile', 'store');
    Route::get('/profile/password', 'edit');
    Route::patch('/profile/password', 'update');
});

Route::get('/authorprofile/{user}', [AuthorProfileController::class, 'index']);