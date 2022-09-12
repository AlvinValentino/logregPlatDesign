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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password');
        });

        Schema::create('seller', function (Blueprint $table) {
            $table->increments('id_seller');
            $table->string('name');
            $table->string('product_name');
            $table->longText('product_file');
            $table->string('category');
            $table->text('description');
            $table->string('nett_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('seller');
    }
};
