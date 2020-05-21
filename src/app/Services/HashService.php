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
        $IdNameOfLesson = Lesson::where('id', $id)->first();
        return md5($IdNameOfLesson->id . $IdNameOfLesson->name);
    }

    /**
     * @param $hash
     * @return mixed
     */
    public function getLessonByHash($hash)
    {
        $IdLesson = Lesson::whereRaw('md5(CONCAT(CAST(id as char),name))="' . $hash . '"')->first()->id;
        return Lesson::where('id', $IdLesson)->first();
    }
}
