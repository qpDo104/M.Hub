<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // Aggiungi queste righe qui sotto!
    protected $fillable = [
        'title',
        'is_completed',
    ];
}