<?php


namespace App\Services;


use App\Models\Lesson;

class HashService
{
    /**
     * @param $id
     * @return string
     */
    public function getLessonHashById($id)
    {
        return md5(Lesson::where('id', $id)->first()['name']);
    }

    public function getLessonByHash($hash)
    {
        return Lesson::where('id', Lesson::selectRaw('md5(name), id', [$hash])->first()['id'])->first();
    }
}
