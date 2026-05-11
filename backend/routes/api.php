<?php

use Illuminate\Support\Facades\Route;

Route::get('/test-api', function () {
    return response()->json([
        'messaggio' => 'Bella fratellì! Ora il file api.php c\'è ed è tutto attivo!',
        'stato' => 'Gasatissimo'
    ]);
});