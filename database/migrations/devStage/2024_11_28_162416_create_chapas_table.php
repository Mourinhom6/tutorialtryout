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
    Schema::create('chapas', function (Blueprint $table) {
        $table->id();
        $table->string('chapa', 20);
        $table->time('amplitude');
        $table->time('tmp_driving');
        $table->time('tmp_pausa');
        $table->integer('KMS');
        $table->string('escalador', 100)->nullable();
        $table->integer('extra_hours'); // Predefined extra hours
        $table->integer('night_hours'); // Predefined night hours
        $table->string('color'); // Admin color code
        $table->timestamps();
    });

    Schema::create('courses', function (Blueprint $table) {
        $table->id(); // Primary Key
        $table->foreignId('chapa_id')->constrained('chapas')->onDelete('cascade'); // Links to chapas
        $table->integer('linha');
        $table->string('local_chegada', 70);
        $table->string('local_ida', 70);
        $table->time('hora_ida');
        $table->time('hora_chegada');
        $table->time('conducao');
        $table->time('pausa');
        $table->time('kilometers');
        $table->timestamps(); // Created at, updated at
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapas');
        Schema::dropIfExists('courses');

    }
};
