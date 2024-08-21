<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthorProfileController extends Controller
{
    public function index(User $user) {

        $authUser = Auth::user();

        $posts = $user->posts;

        return inertia('AuthorProfile', [
            'authUser' => $authUser,
            'user' => $user,
            'posts' => $posts
        ]);
    }
}
