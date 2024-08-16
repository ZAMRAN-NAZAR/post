<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterUserController extends Controller
{
    public function create() {
        return inertia('Auth/Register');
    }

    public function store(Request $request) {
        $validatedFields = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'min:6', 'max:12']
        ]);

        $user = User::create($validatedFields);

        Auth::login($user);

        return redirect('/');
    }
}
