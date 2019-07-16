<?php

use Faker\Generator as Faker;






$factory->define(App\Models\AllProducts::class, function (Faker $faker) {
    return [
         'name' => $faker->name,
         'price' => $faker->numberBetween(25, 600),
         'filename' => $faker->numberBetween(1,10).'.jpg',
         'category' => $faker->randomElement(['menwear', 'womenwear', 'bagpurse', 'footwear']),
         'type' => $faker->randomElement(['midi', 'max', 'prom']),
         'description' => $faker->text,
    ];
});
