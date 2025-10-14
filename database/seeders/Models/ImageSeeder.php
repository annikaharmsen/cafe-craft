<?php
namespace Database\Seeders\Models;

use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Command :
         * artisan seed:generate --model-mode --models=Image
         *
         */


        $newData0 = \App\Models\Image::create([
            'id' => 1,
            'url' => '/storage/media/coffee-5495609_1280.jpg',
            'alt' => 'Affogato on table with vase',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData1 = \App\Models\Image::create([
            'id' => 2,
            'url' => '/storage/media/barista-6197867_1280.jpg',
            'alt' => 'Barista pouring filter coffee',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData2 = \App\Models\Image::create([
            'id' => 3,
            'url' => '/storage/media/coffee-shop-6771371_1280.jpg',
            'alt' => 'Coffee shop shelf',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData3 = \App\Models\Image::create([
            'id' => 4,
            'url' => '/storage/media/machines-7454949_1280.jpg',
            'alt' => 'Espresso machine at coffee shop',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData4 = \App\Models\Image::create([
            'id' => 5,
            'url' => '/storage/media/coffee-1044387_1280.jpg',
            'alt' => 'Coffee beans from a roastery machine',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData5 = \App\Models\Image::create([
            'id' => 6,
            'url' => '/storage/media/tables-6087304_1280.jpg',
            'alt' => 'Cozy seating area',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData6 = \App\Models\Image::create([
            'id' => 7,
            'url' => '/storage/media/coffee-1281750_1280.jpg',
            'alt' => 'Coffee shop window',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData7 = \App\Models\Image::create([
            'id' => 8,
            'url' => '/storage/media/seoul-7106196_1280.jpg',
            'alt' => 'Communal café table',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData8 = \App\Models\Image::create([
            'id' => 9,
            'url' => '/storage/media/bread-8535650_1280.jpg',
            'alt' => 'Sourdough breakfast rolls',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData9 = \App\Models\Image::create([
            'id' => 10,
            'url' => '/storage/media/chia-5416921_1280.jpg',
            'alt' => 'Chia seed puddings',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData10 = \App\Models\Image::create([
            'id' => 11,
            'url' => '/storage/media/toast-7009956_1280.jpg',
            'alt' => 'Aocado sandwich',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData11 = \App\Models\Image::create([
            'id' => 12,
            'url' => '/storage/media/food-2569257_1280.jpg',
            'alt' => 'Breakfast of waffles, oatmeal, and yogurt',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData12 = \App\Models\Image::create([
            'id' => 13,
            'url' => '/storage/media/shanghai-5978060_1280.jpg',
            'alt' => 'Cupcake pastries with blueberries',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
    }
}
