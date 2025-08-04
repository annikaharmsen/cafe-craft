<?php

namespace Database\Seeders\Models;

use App\Models\MenuCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuCategorySeeder extends Seeder
{
    private $img_ids = [ 1, 5, 13, 10, 12 ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $index = 0;
        MenuCategory::factory()->count(count($this->img_ids))->create()->each(function ($post) use (&$index) {
            $post->index = $index;
            $post->image_id = $this->img_ids[$index++];
            $post->save();
        });
    }
}
