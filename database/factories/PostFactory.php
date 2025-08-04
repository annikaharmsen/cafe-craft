<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => Str::title( fake()->words(3, true) ),
            'body' => fake()->paragraph(4, true),
            'image_id' => Image::exists()
                ? Image::inRandomOrder()->first()->id
                : null
        ];
    }
}
