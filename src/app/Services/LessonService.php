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

    public function postLesson(array $params)
    {
        $filename = Storage::disk('public')->put('/', $params['video_file']);
        return Lesson::create([
            'name' => $params['name'],
            'video_url' => config('filesystems.disks.public.url') . '/' . $filename,
            'text' => $params['text']
        ]);
    }
}
