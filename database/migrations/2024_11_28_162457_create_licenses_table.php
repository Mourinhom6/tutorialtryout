<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('licenses', function (Blueprint $table) {
        $table->id();
        $table->string('NOME', 100);
        $table->integer('NUM');
        $table->string('TIPO', 50);
        $table->string('ATRIBUICAO', 100)->nullable();
        $table->date('EXPIRE_DATE')->nullable();
        $table->string('EXTRA', 100)->nullable();
        $table->date('TIME_EXPANSE')->nullable();
        $table->string('STATE', 50)->nullable();
        $table->timestamps();
    });
    Schema::create('license_changes', function (Blueprint $table) {
        $table->string('id')->primary();
        $table->foreignId('licenses_id')->nullable()->index();
        $table->string('CHANGER', 100)->nullable();
        $table->timestamp('CHANGE_DATE')->default(DB::raw('CURRENT_TIMESTAMP'));
        $table->string('OLD_ATRIBUICAO', 100)->nullable();
        $table->string('NEW_ATRIBUICAO', 100)->nullable();
        $table->date('OLD_EXPIRE_DATE')->nullable();
        $table->date('NEW_EXPIRE_DATE')->nullable();
        $table->string('OLD_STATE', 50)->nullable();
        $table->string('NEW_STATE', 50)->nullable();
        $table->text('OBSERVATION')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licenses');
        Schema::dropIfExists('license_changes');
    }
};
