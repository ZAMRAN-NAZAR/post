<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Response;

class SessionController extends Controller
{
    public function create() : Response 
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request) : RedirectResponse 
    {
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

        return redirect('/')->with('loggedIn', 'You have successfully logged in');
    }

    public function destroy() : RedirectResponse 
    {
        Auth::logout();

        return redirect('/login')->with('loggedOut', 'You have successfully logged out');
    }
}
