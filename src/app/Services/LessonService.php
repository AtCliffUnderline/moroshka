<?php


namespace App\Services;


use App\Models\Lesson;
use Illuminate\Support\Facades\Storage;

class LessonService
{
    /**
     * @return Lesson[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getAllLessons()
    {
        return Lesson::all();
    }

    /**
     * @param array $params
     * @return mixed
     */
    public function postLesson(array $params)
    {
        $filename = Storage::disk('public')->put('/', $params['video_file']);
        return Lesson::create([
            'name' => $params['name'],
            'video_url' => config('filesystems.disks.public.url') . '/' . $filename,
            'text' => $params['text']
        ]);
    }

    /**
     * @param $id
     * @param array $params
     * @return mixed
     */
    public function updateLesson($id, array $params)
    {
        $filename = Storage::disk('public')->put('/', $params['video_file']);
        return Lesson::where('id', $id)->update([
            'name' => $params['name'],
            'video_url' => config('filesystems.disks.public.url') . '/' . $filename,
            'text' => $params['text']
        ]);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function deleteLessonById($id)
    {
        return Lesson::where('id', $id)->delete();
    }
}
