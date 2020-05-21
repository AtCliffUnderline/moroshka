<?php

namespace App\Http\Controllers;

use App\Services\HashService;

class LessonHashController extends Controller
{
    /**
     * @var HashService
     */
    private $hashService;

    public function __construct(HashService $hashService)
    {
        $this->hashService = $hashService;
    }

    /**
     * @param $id
     * @return string
     */
    public function getHash($id)
    {
        return $this->hashService->getLessonHashById($id);
    }

    /**
     * @param $hash
     * @return mixed
     */
    public function getLesson($hash)
    {
        return $this->hashService->getLessonByHash($hash);
    }
}
