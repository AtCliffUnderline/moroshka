<?php

namespace App\Models;

use App\MagicMethods;
use Illuminate\Foundation\Auth\User as Authenticable;

class User extends Authenticable
{
    use MagicMethods;

    protected $table = 'users';
    protected $guarded = ['rules'];
    protected $hidden = ['password','remember_token'];
}
