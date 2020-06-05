<?php


namespace App\Services;


use Illuminate\Support\Facades\Auth;

class LoginService
{
    /**
     * @param array $param
     * @return bool
     */
    public function loginCheck(array $param)
    {
        return Auth::attempt($param, true);
    }
}
