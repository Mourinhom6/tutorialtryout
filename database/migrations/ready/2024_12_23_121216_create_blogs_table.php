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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('importance');
            $table->string('img_main');
            $table->string('title');
            $table->string('subtitle');
            $table->smallInteger('size');
            $table->longText('intro');
            $table->longText('text1');
            $table->longText('text2');
            $table->string('state');
            // $table->string('authors_name');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');
            $table->date('date');
            $table->timestamps();
        });

        Schema::create('blog_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_id')->constrained()->onDelete('cascade');
            $table->string('img');
            $table->string('title');
            $table->timestamps();
        });

        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('blog_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_id')->constrained()->onDelete('cascade');
            $table->foreignId('tag_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove foreign key constraints first
        // Schema::table('blogs', function (Blueprint $table) {
        //     $table->dropForeign(['created_by']);
        //     $table->dropForeign(['updated_by']);
        // });

        // Schema::table('blog_tag', function (Blueprint $table) {
        //     $table->dropForeign(['blog_id']);
        //     $table->dropForeign(['tag_id']);
        // });

        // Schema::table('blog_images', function (Blueprint $table) {
        //     $table->dropForeign(['blog_id']);
        // });

        // Drop tables in reverse order of creation to avoid dependency issues
        Schema::dropIfExists('blog_images');
        Schema::dropIfExists('blog_tag');
        Schema::dropIfExists('tags');
        Schema::dropIfExists('blogs');
    }
};
