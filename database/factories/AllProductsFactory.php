<?php

use Faker\Generator as Faker;






$factory->define(App\Models\AllProducts::class, function (Faker $faker) {
    return [
          'name' => $faker->name,
         'price' => $faker->randomFloat(2, 25, 600),
         'filename' => $faker->numberBetween(1,10).'.jpg',
         'category' => $faker->randomElement(['Men Dress', 'Women Dress', 'Bag Purse', 'Foot']),
    ];
});
