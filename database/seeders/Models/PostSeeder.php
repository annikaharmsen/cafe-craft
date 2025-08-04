<?php

namespace Database\Seeders\Models;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $count = 1;
        Post::factory()->count(6)->create()->each(function ($post) use (&$count) {
            $post->index = $count++;
            $post->save();
        });    }
}
