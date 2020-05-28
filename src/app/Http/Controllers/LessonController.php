<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddLessonRequest;
use App\Services\LessonService;

class LessonController extends Controller
{
    /**
     * @var LessonService
     */
    private $lessonService;

    public function __construct(LessonService $lessonService)
    {
        $this->lessonService = $lessonService;
    }

    /**
     * @return \App\Models\Lesson[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getLessons()
    {
        return $this->lessonService->getAllLessons();
    }

    /**
     * @param AddLessonRequest $request
     */
    public function postLesson(AddLessonRequest $request)
    {
        return $this->lessonService->postLesson($request->all());
    }

    /**
     * @param $id
     * @param AddLessonRequest $request
     * @return mixed
     */
    public function updateLesson($id, AddLessonRequest $request)
    {
        return $this->lessonService->updateLesson($id, $request->all());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function deleteLesson($id)
    {
        return $this->lessonService->deleteLessonById($id);
    }
}
