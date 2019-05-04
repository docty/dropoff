<?php

use Faker\Generator as Faker;
use App\Models\AllProducts;






$factory->define(App\Models\Footwear::class, function (Faker $faker) {
    return [
         'name' => $faker->name,
         /** 'product_id' =>  function(){
                return AllProducts::all()->random();
        },**/
         'price' => $faker->numberBetween(25, 600),
         'filename' => '1.jpg',
         'type' => 'foot wear',
         'description' => $faker->text,
    ];
});
