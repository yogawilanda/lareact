<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => $this->faker->sentence(2),
            'product_price' => $this->faker->randomFloat(2, 10, 100),
            'product_description' => $this->faker->paragraph,
            'product_image' => $this->faker->imageUrl(),
            'product_category' => $this->faker->word,
            'product_sku' => $this->faker->unique()->randomNumber(6),

        ];
    }
}
