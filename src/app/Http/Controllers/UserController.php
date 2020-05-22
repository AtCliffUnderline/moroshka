<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddUserRequest;
use App\Services\UserService;

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
     * @return mixed
     */
    public function addUser(AddUserRequest $request)
    {
        return $this->userService->postUser($request->all());
    }

}
