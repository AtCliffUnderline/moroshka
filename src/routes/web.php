<?php

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

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


Route::get('/404', function () {
    throw new \Symfony\Component\HttpKernel\Exception\NotFoundHttpException();
});
Route::get('/lesson/{vue_capture?}', HomeController::class . '@lesson')->where('vue_capture', '[\/\w\.-]*');
Route::get('/admin', HomeController::class . '@admin');
Route::get('/auth', HomeController::class . '@admin');


