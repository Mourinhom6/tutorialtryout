<?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;
// use Illuminate\Support\Facades\DB;

// return new class extends Migration
// {
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('openings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('location');
            $table->string('type'); // e.g., 'Full-time', 'Part-time'
            $table->string('subsentence')->nullable();
            $table->text('who_we_are');
            $table->text('what_were_looking');
            // $table->json('props')->nullable(); // e.g., JSON to store additional properties
            $table->longText('why_to_apply')->nullable();
            $table->longText('surroundings')->nullable();
            $table->string('state');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');
            $table->timestamps();
        });

        Schema::create('props', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('opening_prop', function (Blueprint $table) {
            $table->id();
            $table->foreignId('opening_id')->constrained();
            $table->foreignId('prop_id')->constrained();
            $table->timestamps();
        });
    }
};
    /**
     * Reverse the migrations.
     */
    // public function down(): void
    // {
    //     // Schema::table('openings', function (Blueprint $table) {
        //     $table->dropForeign(['created_by']);
        //     $table->dropForeign(['updated_by']);
        // });

        // Schema::table('opening_prop', function (Blueprint $table) {
        //     $table->dropForeign(['opening_id']);
        //     $table->dropForeign(['prop_id']);
        // });

        // Schema::table('opening', function (Blueprint $table) {
        //     $table->dropForeign('opening_created_by_foreign');
        //     // Drop any other foreign keys referencing the users table
        // });

        // Schema::dropIfExists('opening');
        // Schema::dropIfExists('users');

    //     DB::statement('DROP TABLE IF EXISTS opening CASCADE');
    //     DB::statement('DROP TABLE IF EXISTS users CASCADE');
    // }

        // Schema::disableForeignKeyConstraints();
        // Schema::dropIfExists('opening');
        // Schema::dropIfExists('users');
        // Schema::enableForeignKeyConstraints();

        // Schema::dropIfExists('opening_prop');
        // Schema::dropIfExists('props');
        // Schema::dropIfExists('openings');
    // }

//     public function down()
// {
//     Schema::disableForeignKeyConstraints();

//     // Drop all tables here
//     Schema::dropIfExists('opening_prop');
//     Schema::dropIfExists('props');
//     Schema::dropIfExists('openings');
//     // Schema::dropIfExists('blogs');
//     // Schema::dropIfExists('tags');
//     // Schema::dropIfExists('users');
//     // Add any other tables you need to drop

//     Schema::enableForeignKeyConstraints();
// }

// public function down()
// {
//     // Drop all tables here
//     Schema::dropIfExists('opening_prop');
//     Schema::dropIfExists('props');
//     Schema::dropIfExists('openings');
//     // Schema::dropIfExists('blogs');
//     // Schema::dropIfExists('tags');
//     // Schema::dropIfExists('users');
//     // Add any other tables you need to drop

// }

// public function down(): void
// {
//     Schema::disableForeignKeyConstraints();

//     // Drop tables in reverse order of creation
//     Schema::dropIfExists('opening_prop');
//     Schema::dropIfExists('props');

//     // Remove foreign key constraints from openings table
//     Schema::table('openings', function (Blueprint $table) {
//         $table->dropForeign(['created_by']);
//         $table->dropForeign(['updated_by']);
//     });

//     Schema::dropIfExists('openings');

//     Schema::enableForeignKeyConstraints();
// }

// public function up(): void
// {
//     // Create the openings table
//     Schema::create('openings', function (Blueprint $table) {
//         $table->id();
//         $table->string('title');
//         $table->string('location');
//         $table->string('type'); // e.g., 'Full-time', 'Part-time'
//         $table->string('subsentence')->nullable();
//         $table->text('who_we_are');
//         $table->text('what_were_looking');
//         $table->longText('why_to_apply')->nullable();
//         $table->longText('surroundings')->nullable();
//         $table->string('state');
//         $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
//         $table->foreignId('updated_by')->constrained('users')->onDelete('cascade');
//         $table->timestamps();
//     });

//     // Create the props table
//     Schema::create('props', function (Blueprint $table) {
//         $table->id();
//         $table->string('name');
//         $table->timestamps();
//     });

//     // Create the pivot table for props and openings
//     Schema::create('opening_prop', function (Blueprint $table) {
//         $table->id();
//         $table->foreignId('opening_id')->constrained('openings')->onDelete('cascade');
//         $table->foreignId('prop_id')->constrained('props')->onDelete('cascade');
//         $table->timestamps();
//     });
// }

// /**
//  * Reverse the migrations.
//  */
// public function down(): void
// {
//     // Drop foreign key constraints in reverse order
//     Schema::table('opening_prop', function (Blueprint $table) {
//         $table->dropForeign(['opening_id']);
//         $table->dropForeign(['prop_id']);
//     });

//     Schema::table('openings', function (Blueprint $table) {
//         $table->dropForeign(['created_by']);
//         $table->dropForeign(['updated_by']);
//     });

//     // Drop tables in reverse order of their creation to avoid dependency issues
//     Schema::dropIfExists('opening_prop');
//     Schema::dropIfExists('props');
//     Schema::dropIfExists('openings');
// }




// };
