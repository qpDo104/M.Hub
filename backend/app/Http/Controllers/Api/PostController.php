<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // 1. Prende tutti i post dal DB e li manda a Next.js
    public function index() {
        return response()->json(Post::latest()->get()); // 'latest' mette i più nuovi in alto
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'author' => 'required|string',
            'category' => 'required|string',
        ]);

        $post = Post::create($validated);
        return response()->json($post, 201);
    }
public function destroy($id) {
    $post = Post::find($id);
    
    if (!$post) {
        return response()->json(['message' => 'Post non trovato'], 404);
    }

    $post->delete();
    return response()->json(['message' => 'Post eliminato con successo']);
}
}
