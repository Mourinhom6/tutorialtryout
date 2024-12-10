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
    Schema::create('person_data', function (Blueprint $table) {
        $table->id('Numero');
        $table->text('NomeCompleto');
        $table->text('AbrUltNome');
        $table->text('Morada')->nullable();
        $table->text('Localidade')->nullable();
        $table->text('CodigoPostal')->nullable();
        $table->text('DistConcFregBirth')->nullable();
        $table->text('Telefone')->nullable();
        $table->text('Sexo');
        $table->text('Naturalidade')->nullable();
        $table->text('Email')->nullable();
        $table->text('DistConcFregLive')->nullable();
        $table->text('Nacional')->nullable();
        $table->date('DtNasc');
        $table->text('EstadoCivil')->nullable();
        $table->text('NomeConjuge')->nullable();
        $table->text('ProfConjuge')->nullable();
        $table->date('DtCasam')->nullable();
        $table->text('NrContrib')->nullable();
        $table->text('NrUtente')->nullable();
        $table->text('DomFisRFis')->nullable();
        $table->text('BICCidadao')->nullable();
        $table->date('DataEmissaoCC')->nullable();
        $table->text('Vitalicio')->nullable();
        $table->date('DtValidadeCC')->nullable();
        $table->text('Arquivo')->nullable();
        $table->text('CartaConducao')->nullable();
        $table->date('DataEmissaoDriverLicence')->nullable();
        $table->date('DtValidadeDriverLicence')->nullable();
        $table->text('Tipo')->nullable();
        $table->text('Passaporte')->nullable();
        $table->date('DataEmissaoPassaporte')->nullable();
        $table->date('DtValidadePassaporte')->nullable();
        $table->date('DataAdmissao');
        $table->text('Lei')->nullable();
        $table->text('TipoContrato')->nullable();
        $table->integer('Meses')->nullable();
        $table->integer('Dias')->nullable();
        $table->date('DataInicio1');
        $table->date('DataFim');
        $table->integer('RnvPrev')->default(0);
        $table->date('DtEntQuadr');
        $table->integer('RnvEfect')->default(0);
        $table->text('Motivo')->nullable();
        $table->text('Profissao')->nullable();
        $table->text('Categoria')->nullable();
        $table->text('SitProfissao')->nullable();
        $table->date('DtIni');
        $table->date('DtRev')->nullable();
        $table->text('NivelQualif')->nullable();
        $table->text('Vencimento')->nullable();
        $table->text('SubAlim')->nullable();
        $table->date('DtInicioSubAlim');
        $table->text('SubNatal')->nullable();
        $table->text('CodPagam')->nullable();
        $table->text('Horario')->nullable();
        $table->text('InstSegSoc')->nullable();
        $table->string('situacao', 30);
        $table->text('NrBenefic')->nullable();
        $table->text('Sindicato')->nullable();
        $table->text('NrSocio')->nullable();
        $table->text('CompSeg')->nullable();
        $table->text('ApoliceSeg')->nullable();
        $table->date('DtInicioSeg')->nullable();
        $table->text('Estado', 20);
        $table->timestamps();
    });

    Schema::create('utilixe', function (Blueprint $table) {
        $table->id('utilixe_id');
        $table->string('name', 100);
        $table->string('email', 150)->unique();
        $table->string('password', 255);
        $table->string('role', 50)->default('user');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('person_data');
        Schema::dropIfExists('utilixe');
    }
};
