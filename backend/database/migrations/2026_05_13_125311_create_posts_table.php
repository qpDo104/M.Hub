<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');      // Il titolo dell'annuncio
        $table->text('content');      // Il testo del messaggio
        $table->string('author');     // Chi lo ha scritto (es. "Prof. Rossi")
        $table->string('category');   // Es. "Eventi", "Circolari", "Laboratorio"
        $table->timestamps();         // Crea created_at e updated_at in automatico
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
