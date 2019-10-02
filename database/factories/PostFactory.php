<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Posts;
use Faker\Generator as Faker;

$factory->define(Posts::class, function (Faker $faker) {
    
    
    return [
        //
       
        "posts" => $faker->sentence,
        "users_id" => $faker->numberBetween($min = 1, $max = 50)
        // "users_id" => ['id' => App\User::all()->random(1)[0]->id],
        // "created_at" => $faker->dateTime($max = 'now', $timeZone = 'UTC'),
        // "updated_at" =>  $faker->dateTime($max = 'now', $timeZone = 'UTC')
    
       
    ];
});
