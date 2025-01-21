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
        Schema::create('stat_charts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('data_charts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stat_chart_id')->constrained('stat_charts')->onDelete('cascade');
            $table->integer('datavalue');
            $table->timestamps();
        });

        // Schema::create('statchart_data', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('stat_chart_id')->constrained()->onDelete('cascade');
        //     $table->foreignId('datachart_id')->constrained()->onDelete('cascade');
        //     $table->timestamps();
        // });
    }



            // $table->string('value');
            // $table->string('interval');
            // $table->enum('trend', ['up', 'down', 'neutral']);
            // $table->json('data');

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stat_charts');
        Schema::dropIfExists('data_charts');
        // Schema::dropIfExists('statchart_data');


    }
};
