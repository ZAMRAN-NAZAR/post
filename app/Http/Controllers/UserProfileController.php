<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserProfileController extends Controller
{
    public function index() {
        return inertia('Auth/Profile', [
            'user' => Auth::user()
        ]);
    }

    public function store(Request $request) {
        dd($request);
    }
}
