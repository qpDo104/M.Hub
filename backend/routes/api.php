<?php

use Illuminate\Support\Facades\Route;

Route::get('/test-api', function () {
    return response()->json([
        'messaggio' => 'Bella fratellì! Ora il file api.php c\'è ed è tutto attivo!',
        'stato' => 'Gasatissimo'
    ]);
});
use App\Http\Controllers\Api\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::post('/posts', [PostController::class, 'store']);
Route::delete('/posts/{id}', [PostController::class, 'destroy']);