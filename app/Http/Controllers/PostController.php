<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(Post $post) {

        $posts = $post->with('user')->latest()->paginate(5);

        return inertia('Home', [
            'user' => Auth::user(),
            'posts' => $posts
        ]);
    }
}
