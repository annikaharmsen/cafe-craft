<?php

namespace Database\Seeders\Models;

use App\Models\MenuItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $index = 0;
        MenuItem::factory()->count(30)->create()->each(function ($post) use (&$index) {
            $post->index = $index++;
            $post->save();
        });
    }
}
