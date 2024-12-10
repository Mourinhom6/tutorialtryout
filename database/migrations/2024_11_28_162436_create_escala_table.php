<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('escala', function (Blueprint $table) {
        $table->integer('idmot');
        $table->string('nomemot', 120);
        $table->string('escalador', 30);
        $table->string('estado', 30);
        $table->string('dia', 20);
        $table->string('chapanome', 5);
        $table->integer('bus');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escala');
    }
};
