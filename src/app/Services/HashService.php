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
        $idNameOfLesson = Lesson::where('id', $id)->first();
        return md5($idNameOfLesson->id . $idNameOfLesson->name);
    }

    /**
     * @param $hash
     * @return mixed
     */
    public function getLessonByHash($hash)
    {
        $idLesson = Lesson::whereRaw('md5(CONCAT(CAST(id as char),name))="' . $hash . '"')->first()->id;
        return Lesson::where('id', $idLesson)->first();
    }
}
