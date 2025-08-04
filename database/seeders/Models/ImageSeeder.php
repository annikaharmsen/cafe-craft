<?php
namespace Database\Seeders\Models;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
            'url' => 'https://cdn.pixabay.com/photo/2020/08/17/14/37/coffee-5495609_1280.jpg',
            'alt' => 'Affogato on table with vase',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData1 = \App\Models\Image::create([
            'id' => 2,
            'url' => 'https://cdn.pixabay.com/photo/2021/04/22/02/36/barista-6197867_1280.jpg',
            'alt' => 'Barista pouring filter coffee',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData2 = \App\Models\Image::create([
            'id' => 3,
            'url' => 'https://cdn.pixabay.com/photo/2021/11/05/13/15/coffee-shop-6771371_1280.jpg',
            'alt' => 'Coffee shop shelf',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData3 = \App\Models\Image::create([
            'id' => 4,
            'url' => 'https://cdn.pixabay.com/photo/2022/09/14/18/32/machines-7454949_1280.jpg',
            'alt' => 'Espresso machine at coffee shop',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData4 = \App\Models\Image::create([
            'id' => 5,
            'url' => 'https://cdn.pixabay.com/photo/2015/11/15/15/01/coffee-1044387_1280.jpg',
            'alt' => 'Coffee beans from a roastery machine',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData5 = \App\Models\Image::create([
            'id' => 6,
            'url' => 'https://cdn.pixabay.com/photo/2021/03/11/14/51/tables-6087304_1280.jpg',
            'alt' => 'Cozy seating area',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData6 = \App\Models\Image::create([
            'id' => 7,
            'url' => 'https://cdn.pixabay.com/photo/2016/03/26/23/00/coffee-1281750_1280.jpg',
            'alt' => 'Coffee shop window',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData7 = \App\Models\Image::create([
            'id' => 8,
            'url' => 'https://cdn.pixabay.com/photo/2022/04/02/02/33/seoul-7106196_1280.jpg',
            'alt' => 'Communal café table',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData8 = \App\Models\Image::create([
            'id' => 9,
            'url' => 'https://cdn.pixabay.com/photo/2024/01/27/10/24/bread-8535650_1280.jpg',
            'alt' => 'Sourdough breakfast rolls',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData9 = \App\Models\Image::create([
            'id' => 10,
            'url' => 'https://cdn.pixabay.com/photo/2020/07/18/11/20/chia-5416921_1280.jpg',
            'alt' => 'Chia seed puddings',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData10 = \App\Models\Image::create([
            'id' => 11,
            'url' => 'https://cdn.pixabay.com/photo/2022/02/12/21/22/toast-7009956_1280.jpg',
            'alt' => 'Aocado sandwich',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData11 = \App\Models\Image::create([
            'id' => 12,
            'url' => 'https://cdn.pixabay.com/photo/2017/08/02/00/51/food-2569257_1280.jpg',
            'alt' => 'Breakfast of waffles, oatmeal, and yogurt',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
        $newData12 = \App\Models\Image::create([
            'id' => 13,
            'url' => 'https://cdn.pixabay.com/photo/2021/02/03/13/54/shanghai-5978060_1280.jpg',
            'alt' => 'Cupcake pastries with blueberries',
            'created_at' => NULL,
            'updated_at' => NULL,
        ]);
    }
}