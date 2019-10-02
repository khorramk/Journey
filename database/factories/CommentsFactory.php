<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(Comments::class, function (Faker $faker) {
    return [
        //
        "comments" => $faker->sentences,
        "posts_id" => $faker->numberBetween($min = 1, $max= 50),
    ];
});
