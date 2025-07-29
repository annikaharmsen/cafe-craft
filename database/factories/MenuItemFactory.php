<?php

namespace Database\Factories;

use App\Models\MenuCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MenuItem>
 */
class MenuItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word,
            'price_sm' => fake()->numberBetween(2000, 1000),
            'price_md' => fake()->numberBetween(3000, 1100),
            'price_lg' => fake()->numberBetween(4000, 1200),'menu_category_id' => MenuCategory::exists()
                ? MenuCategory::inRandomOrder()->first()->id
                : MenuCategory::factory()->create()->id
        ];
    }
}
