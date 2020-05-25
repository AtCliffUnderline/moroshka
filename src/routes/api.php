<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/lessons', 'LessonController@getLessons');
Route::post('/lessons', 'LessonController@postLesson');
Route::post('/lessons/hash/{id}', 'LessonHashController@getHash');
Route::get('/lessons/hash/{hash}', 'LessonHashController@getLesson');
Route::post('/login', 'AuthController@loginUser');
Route::get('/iam', 'AuthController@authUser');
