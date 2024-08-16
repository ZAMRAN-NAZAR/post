<?php

use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::get('/login', [SessionController::class, 'create']);

Route::get('/register', [RegisterUserController::class, 'create']);