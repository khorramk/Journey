<?php

use Illuminate\Database\Seeder;
use App\Posts;
class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'posts' => Str::random(10),
            'users_id' => 1,
            
        ]);
        // factory(App\Posts::class, 10)->create();
        // $posts = Posts::first();
        // dd($posts->getAttributes());
      
    }
}
