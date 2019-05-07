<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
     
        DB::table('users')->insert([
            'name' => 'Admin Admin',
            'email' => 'admin@argon.com',
            'role' => 'admin',
            'email_verified_at' => now(),
            'password' => Hash::make('secret'),
            'created_at' => now(), 
            'updated_at' => now()
        ]);
    
    }
}
