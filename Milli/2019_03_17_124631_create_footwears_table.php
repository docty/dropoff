<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFootwearsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footwears', function (Blueprint $table) {
            $table->bigIncrements('id');
            //$table->bigInteger('product_id')->unsigned()->index();
            //$table->foreign('product_id')->references('id')->on('all_products')->onDelete('cascade');
            $table->char('name', 255);
            $table->char('price', 255);
            $table->text('filename');
            $table->text('type');
            $table->text('description');
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
        Schema::dropIfExists('footwears');
    }
}
