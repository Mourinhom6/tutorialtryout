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
        $table->integer('idviagem');
        $table->integer('linha');
        $table->string('chapa', 20);
        $table->string('localida', 70);
        $table->string('localvolta', 70);
        $table->time('horaida');
        $table->time('horavolta');
        $table->time('tmptrabalho');
        $table->time('tmpausa')->nullable();
        $table->string('escalador', 100)->nullable();
        $table->text('notas')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapas');
    }
};
