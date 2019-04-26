<?php

use Faker\Generator as Faker;
use App\Models\AllProducts;







$factory->define(App\Models\WomanWear::class, function (Faker $faker) {
    return [
            'name' => $faker->name,
             'product_id' =>  function(){
                return AllProducts::all()->random();
            },
         	'price' => $faker->numberBetween(25, 600),
         	'filename' => $faker->numberBetween(6,10).'.jpg',
         	'type' => $faker->randomElement(['midi', 'maxi', 'prom', 'little', 'mini']),
         	'description' => $faker->text,
    ];
});
