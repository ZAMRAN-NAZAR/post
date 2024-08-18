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

    public function show(Post $post) {

        $postAuthor = $post->user;

        return inertia('Show', [
            'post' => $post,
            'postAuthor' => $postAuthor,
            'user' => Auth::user()
        ]);
    }

    public function edit(Post $post) {

        $user = Auth::user();

        return inertia('Edit', [
            'post' => $post,
            'user' => $user
        ]);
    }

    public function update(Request $request, Post $post) {
        
        $validatedFields = $request->validate([
            'body' => ['required', 'max:250']
        ]);

        $post->update($validatedFields);

        return redirect('/');
    }
}
