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
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->text('address');
            $table->string('phone');
            $table->longText('description');
            $table->longText('avatar');
        });

        Schema::create('product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_seller')->references('id')->on('users');
            $table->string('name');
            $table->string('product_name');
            $table->longText('product_file');
            $table->string('category');
            $table->text('description');
            $table->string('nett_price');
        });

        Schema::create('cart', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')->references('id')->on('users');
            $table->string('name');
            $table->foreignId('id_product')->references('id')->on('product');
            $table->string('product_name');
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
        Schema::dropIfExists('product');
        Schema::dropIfExists('cart');
    }
};
