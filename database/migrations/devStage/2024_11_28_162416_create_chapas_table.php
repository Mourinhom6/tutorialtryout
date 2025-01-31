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
        $table->time('amplitude')->nullable();
        $table->time('tmp_driving')->nullable();
        $table->time('tmp_pausa')->nullable();
        $table->decimal('KMS', 14, 4)->nullable();
        $table->string('escalador', 100)->nullable();
        $table->time('extra_hours')->nullable();
        $table->time('night_hours')->nullable();
        $table->string('color')->nullable();
        $table->timestamps();
    });

    Schema::create('courses', function (Blueprint $table) {
        $table->id(); // Primary Key
        $table->foreignId('chapa_id')->constrained('chapas')->onDelete('cascade'); // Links to chapas
        $table->integer('linha');
        $table->string('type', 20);
        $table->string('local_chegada', 70);
        $table->string('local_ida', 70);
        $table->time('hora_ida');
        $table->time('hora_chegada');
        $table->time('conducao')->nullable();
        $table->decimal('kilometers', 14, 4);
        $table->timestamps(); // Created at, updated at
    });

    // Schema::create('linhas', function (Blueprint $table) {
    //     $table->id(); // Primary Key
    //     $table->foreignId('chapa_id')->constrained('chapas')->onDelete('cascade'); // Links to chapas
    //     $table->integer('linha');
    //     $table->string('local_chegada', 70);
    //     $table->string('local_ida', 70);
    //     $table->time('hora_ida');
    //     $table->time('hora_chegada');
    //     $table->time('conducao');
    //     $table->time('pausa');
    //     $table->time('kilometers');
    //     $table->timestamps(); // Created at, updated at
    // });

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
