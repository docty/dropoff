<?php

use Faker\Generator as Faker;
use App\Models\AllProducts;






$factory->define(App\Models\BagsPurse::class, function (Faker $faker) {
    
         return [
         'name' => $faker->name,
       /**  'product_id' =>  function(){
                return AllProducts::all()->random();
        }, **/
         'price' => $faker->numberBetween(25, 600),
         'filename' => '2.jpg',
         'type' => 'Bag Purse',
         'description' => $faker->text,
    
    ];
});
