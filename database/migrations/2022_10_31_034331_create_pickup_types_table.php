<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pickup_types', function (Blueprint $table) {
            $table->foreignId('trash_pickup_id')->constrained('trash_pickups')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('trash_type_id')->constrained('trash_types')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pickup_types');
    }
};
