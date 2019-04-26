<?php

use Faker\Generator as Faker;

$factory->define(App\Models\LatestArrival::class, function (Faker $faker) {
    return [
         'name' => $faker->name,
         'description' => $faker->text,
         'filename' => $faker->numberBetween(1,10).'.jpg',
         'price' => $faker->randomFloat(2, 25, 600),
         'banner' => 1,
          
    ];
});
