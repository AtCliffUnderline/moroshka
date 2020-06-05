<?php

namespace App\Models;

use App\MagicMethods;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use MagicMethods, HasApiTokens;

    protected $table = 'users';
    protected $guarded = ['rules'];
    protected $hidden = ['password', 'remember_token'];
}
