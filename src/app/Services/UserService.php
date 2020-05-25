<?php


namespace App\Services;


use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    /**]
     * @param array $param
     * @return User
     */
    public function postUser(array $param): User
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
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model|object|null
     */
    public function findUserByLogin($login)
    {
        return User::where('login', '=', $login)->first();
    }
}
