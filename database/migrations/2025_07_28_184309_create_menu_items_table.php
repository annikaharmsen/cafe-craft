<?php

use App\Models\Image;
use App\Models\MenuCategory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu_items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('index')->nullable();
            $table->integer('price_sm')->nullable();
            $table->integer('price_md')->nullable();
            $table->integer('price_lg')->nullable();
            $table->foreignIdFor(Image::class)->nullable();
            $table->foreignIdFor(MenuCategory::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_items');
    }
};
