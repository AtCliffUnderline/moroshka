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
        return md5(Lesson::where('id', $id)->first()->name);
    }

    /**
     * @param $hash
     * @return mixed
     */
    public function getLessonByHash($hash)
    {
        $IdLesson = Lesson::whereRaw('md5(name)="' . $hash . '"')->first()->id;
        return Lesson::where('id', $IdLesson)->first();
    }
}
