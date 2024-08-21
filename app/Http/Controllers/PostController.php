<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class PostController extends Controller
{
    public function index(Post $post) : Response 
    {
        $posts = $post->with('user')->latest()->paginate(5);

        return inertia('Home', [
            'user' => Auth::user(),
            'posts' => $posts
        ]);
    }

    public function create() : Response 
    {
        return inertia('Create', [
            'user' => Auth::user()
        ]);
    }

    public function store(Request $request) : RedirectResponse 
    {
        $validatedFields = $request->validate([
            'body' => ['required', 'max:250']
        ]);

        $user = Auth::user();

        Post::create([
            'body' => $validatedFields['body'],
            'user_id' => $user->id
        ]);

        return redirect('/')->with('created', 'The post has been created successfully');
    }

    public function show(Post $post) : Response 
    {
        $postAuthor = $post->user;

        return inertia('Show', [
            'post' => $post,
            'postAuthor' => $postAuthor,
            'user' => Auth::user()
        ]);
    }

    public function edit(Post $post) : Response 
    {
        $user = Auth::user();

        return inertia('Edit', [
            'post' => $post,
            'user' => $user
        ]);
    }

    public function update(Request $request, Post $post) : RedirectResponse 
    {    
        $validatedFields = $request->validate([
            'body' => ['required', 'max:250']
        ]);

        $post->update($validatedFields);

        return redirect('/')->with('updated', 'The post has been updated successfully');
    }

    public function destroy(Post $post) : RedirectResponse 
    {
        $post->delete();

        return redirect('/')->with('deleted', 'The post has been deleted successfully');
    }
}
