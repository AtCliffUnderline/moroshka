<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/lessons', 'LessonController@getLessons');
Route::post('/lessons', 'LessonController@postLesson');
Route::post('/lessons/hash/{id}', 'LessonHashController@getHash');
Route::get('/lessons/hash/{hash}', 'LessonHashController@getLesson');
