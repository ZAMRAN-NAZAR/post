<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class RegisterUserController extends Controller
{
    public function create() : Response 
    {
        return inertia('Auth/Register');
    }

    public function store(Request $request) : RedirectResponse 
    {
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
