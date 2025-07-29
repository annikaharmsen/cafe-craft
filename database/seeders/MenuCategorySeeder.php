<?php

namespace Database\Seeders;

use App\Models\MenuCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $count = 1;
        MenuCategory::factory()->count(5)->create()->each(function ($post) use (&$count) {
            $post->index = $count++;
            $post->save();
        });
    }
}
