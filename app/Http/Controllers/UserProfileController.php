<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserProfileController extends Controller
{
    public function index() {
        return inertia('Auth/Profile', [
            'user' => Auth::user()
        ]);
    }

    public function store(Request $request) {
    
        $validatedFeilds = $request->validate([
            'name' => ['required', 'string' ,'min:3'],
        ]);

        $user = Auth::user();

        $user->update([
            'name' => $validatedFeilds['name']
        ]);

        return redirect('/')->with('name', 'Profile name has been changed successfully.');
    }

    public function edit() {
        return inertia('Auth/Password', [
            'user' => Auth::user()
        ]);
    }

    public function update(Request $request) {
        $validatedFeilds = $request->validate([
            'current_password' => ['required'],
            'new_password' => ['required', 'min:3', 'confirmed']
        ]);

        $user = Auth::user();

        if (! Hash::check($validatedFeilds['current_password'], $user->password)) {
            throw ValidationException::withMessages([
                'current_password' => 'Current password is incorrect'
            ]);
        }

        $user->update([
            'password' => Hash::make($validatedFeilds['new_password'])
        ]);

        return redirect('/')->with('password', 'The password has been successfully changed.');
    }
}
