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
    Schema::create('recibo', function (Blueprint $table) {
        $table->id('NU');
        $table->string('NUM', 30)->nullable();
        $table->string('COD', 30)->nullable();
        $table->date('DATE')->nullable();
        $table->string('OBSERVATIONS', 512)->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recibo');
    }
};
