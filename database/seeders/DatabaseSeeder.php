<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $this->call(\Database\Seeders\Models\ImageSeeder::class);
        $this->call(\Database\Seeders\Models\MenuCategorySeeder::class);
        $this->call(\Database\Seeders\Models\MenuItemSeeder::class);
        $this->call(\Database\Seeders\Models\PostSeeder::class);
    }
}
