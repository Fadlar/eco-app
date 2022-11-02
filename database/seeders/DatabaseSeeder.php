<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        collect([
            [
                'name' => 'Administrator',
                'email' => 'admin@mail.com',
                'password' => bcrypt('password'),
                'role' => 'admin',
                'email_verified_at' => now()
            ],
            [
                'name' => 'Fadlan',
                'email' => 'fadlan@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now()
            ]
        ])->each(fn ($users) => \App\Models\User::create($users));
        // \App\Models\User::factory(10)->create();
        // \App\Models\User::factory()->create([],);
    }
}
