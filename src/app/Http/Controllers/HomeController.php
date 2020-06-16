<?php

namespace App\Http\Controllers;

use App\Services\HashService;

class HomeController extends Controller
{
    public function lesson($vueCapture, HashService $service)
    {
        $service->getLessonByHash($vueCapture);
        return view('index');
    }

    public function admin()
    {
        return view('index');
    }
}
