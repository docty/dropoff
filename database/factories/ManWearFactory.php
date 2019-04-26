<?php

use Faker\Generator as Faker;
use App\Models\AllProducts;









$factory->define(App\Models\ManWear::class, function (Faker $faker) {
    return [
         'name' => $faker->name,
          'product_id' =>  function(){
                return AllProducts::all()->random();
        },
         'price' => $faker->numberBetween(25, 600),
         'filename' => $faker->numberBetween(3,5).'.jpg',
         'type' => $faker->randomElement(['midi', 'max', 'prom']),
         'description' => $faker->text,
    ];
});
