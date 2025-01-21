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
        Schema::create('escalas', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->date('date'); // Date of the assignment
            $table->foreignId('driver_id')->constrained('users'); // Driver (Motorista)
            $table->foreignId('assigner_id')->constrained('users'); // User assigning the work
            $table->foreignId('bus_id')->constrained('bus_frote'); // Assigned bus
            $table->foreignId('chapa_id')->constrained('chapas'); // Assigned chapa
            $table->timestamps(); // Created at, updated at
            $table->unique(['date', 'driver_id']); // Ensure driver isn't double-assigned on the same day
            $table->unique(['date', 'bus_id']); // Ensure bus isn't used twice on the same day
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('escalas');

    }
};
