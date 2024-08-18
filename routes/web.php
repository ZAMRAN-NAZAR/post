<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/register', [RegisterUserController::class, 'store']);

Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);
Route::delete('/logout', [SessionController::class, 'destroy'])->middleware('auth');

Route::controller(PostController::class)->group(function() {
    Route::get('/', 'index');
    Route::get('/posts/{post}', 'show')->middleware('auth');

    Route::get('/posts/{post}/edit', 'edit')
        ->middleware('auth')
        ->can('handle-post', 'post');

    Route::put('/posts/{post}', 'update')
        ->name('posts.update')
        ->middleware('auth')
        ->can('handle-post', 'post');

    Route::delete('/posts/{post}', 'destroy')
        ->name('posts.destroy')
        ->middleware('auth')
        ->can('handle-post', 'post');
});