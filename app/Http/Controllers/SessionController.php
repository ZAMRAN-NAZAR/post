<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function create() {
        return inertia('Auth/Login');
    }

    public function store(Request $request) {
        $validatedFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]); 

        if (! Auth::attempt($validatedFields)) {
            throw ValidationException::withMessages([
                'password' => 'Sorry, given credentials do not match!'
            ]);
        }

        $request->session()->regenerate();

        return redirect('/');
    }

    public function destroy() {
        Auth::logout();

        return redirect('/');
    }
}
