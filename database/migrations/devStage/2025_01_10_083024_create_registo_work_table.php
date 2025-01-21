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
        Schema::create('registo_work', function (Blueprint $table) {
            $table->id();
            $table->date('date'); // Date of the work day
            $table->foreignId('driver_id')->constrained('users'); // Driver (Motorista)
            $table->foreignId('bus_id')->constrained('bus_frote'); // Bus used
            $table->foreignId('chapa_id')->constrained('chapas'); // Chapa worked on
            $table->integer('extra_hours'); // Extra hours worked
            $table->integer('night_hours'); // Night hours worked
            $table->integer('kilometers'); // Total kilometers driven
            $table->integer('rest_time'); // Rest time in minutes

            $table->timestamps(); // Created at, updated at

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registo_work');
    }
};
