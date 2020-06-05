<?php

namespace App\Models;

use App\MagicMethods;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use MagicMethods;

    protected $table = 'lessons';
    protected $guarded = [];
}
