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
    Schema::create('bus_frote', function (Blueprint $table) {
        $table->id();
        $table->integer('NU')->unique();
        $table->string('EMPRESA', 100)->nullable();
        $table->string('MARCA', 100)->nullable();
        $table->string('MODELO', 100)->nullable();
        $table->string('MATRICULA', 100)->nullable();
        $table->string('CHASSIS', 100)->nullable();
        $table->integer('LOTACAO')->nullable();
        $table->integer('MOTORISTA')->nullable();
        $table->integer('GUIA')->nullable();
        $table->integer('SENTADOS')->nullable();
        $table->integer('EM_PE')->nullable();
        $table->integer('CR')->nullable();
        $table->integer('PMR')->nullable();
        $table->string('CAT', 100)->nullable();
        $table->date('ANO')->nullable();
        $table->string('COR', 100)->nullable();
        $table->string('COMBUSTIVEL', 100)->nullable();
        $table->string('DUA', 100)->nullable();
        $table->string('DIVERSOS', 100)->nullable();
        $table->string('CARROCARIA', 100)->nullable();
        $table->string('ATRIBUIDO', 100)->nullable();
        $table->string('OBSERVACOES', 512)->nullable();
        $table->string('SEGURADORA', 100)->nullable();
        $table->string('APOLICE', 100)->nullable();
        $table->date('VALIDADE_INI')->nullable();
        $table->date('VALIDADE_FIM')->nullable();
        $table->string('CAP_SEGURO', 25)->nullable();
        $table->string('FRANQUIA', 25)->nullable();
        $table->date('INSPEC_PERIODIC_VALIDADE')->nullable();
        $table->date('INSPEC_EXTRA_DATA')->nullable();
        $table->date('TCC_INI')->nullable();
        $table->date('TCC_FIM')->nullable();
        $table->date('TPP_INI')->nullable();
        $table->date('TPP_FIM')->nullable();
        $table->date('TRI_INI')->nullable();
        $table->date('TRI_FIM')->nullable();
        $table->string('ESTADO', 10)->default('ACTIVO');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bus_frote');
    }
};
