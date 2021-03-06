<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Lesson;
use Faker\Generator as Faker;

$factory->define(Lesson::class, function (Faker $faker) {
    return [
        'name' => $faker->name(40),
        'video_url' => $faker->text(50),
        'text' => $faker->text(50),
    ];
});
