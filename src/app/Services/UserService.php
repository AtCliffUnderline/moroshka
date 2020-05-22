<?php


namespace App\Services;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    /**
     * @param array $param
     * @return mixed
     */
    public function postUser(array $param)
    {
        return User::create([
            'login' => $param['login'],
            'password' => Hash::make($param['password']),
            'email' => $param['email'],
            'rules' => $param['rules']
        ]);
    }

    /**
     * @param $login
     * @return mixed
     */
    public function findUserByLogin($login)
    {
        return User::where('login', '=', $login)->first();
    }
}
