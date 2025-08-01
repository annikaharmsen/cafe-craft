<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    /** @use HasFactory<\Database\Factories\MenuItemFactory> */
    use HasFactory;

    protected $fillable = ['name', 'price_sm', 'price_md', 'price_lg', 'image_id', 'menu_category_id'];

    public function image() {
        return $this->belongsTo(Image::class);
    }

    public function category() {
        return $this->belongsTo(MenuCategory::class);
    }
}
