<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLatestArrivalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('latest_arrivals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('name', 255);
            $table->text('description');
            $table->text('filename');
            $table->char('price', 191);
            $table->integer('banner');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('latest_arrivals');
    }
}
