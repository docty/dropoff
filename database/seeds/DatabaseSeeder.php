<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
         factory(App\Models\AllProducts::class, 100)->create();
         factory(App\Models\Footwear::class, 25)->create();
         factory(App\Models\BagsPurse::class, 25)->create();
         factory(App\Models\ManWear::class, 25)->create();
         factory(App\Models\WomanWear::class, 25)->create();
         factory(App\Models\LatestArrival::class, 5)->create();
         
    }
}
