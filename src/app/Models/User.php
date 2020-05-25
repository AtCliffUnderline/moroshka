<?php

namespace App\Models;

use App\MagicMethods;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use MagicMethods;

    protected $table = 'users';
    protected $guarded = ['rules'];
    protected $hidden = ['password', 'remember_token'];
}
