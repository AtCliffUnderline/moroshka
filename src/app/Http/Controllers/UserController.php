<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUserRequest;
use App\Services\UserService;
use Illuminate\Database\Eloquent\Model;

class UserController extends Controller
{
    private $userService;

    /**
     * UserController constructor.
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param AddUserRequest $request
     * @return Model
     */
    public function addUser(AddUserRequest $request) : Model
    {
        return $this->userService->postUser($request->all());
    }

}
