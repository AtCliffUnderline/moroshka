<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddLessonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'video_file' => 'file|mimetypes:video/mpeg,video/mp4,video/quicktime',
            'text' => 'required|string'
        ];
    }
}
