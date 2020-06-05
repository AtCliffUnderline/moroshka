<?php

namespace App\Http\Controllers;


use App\Http\Requests\LoginRequest;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @var LoginService
     */
    private $loginService;

    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }

    /**
     * @param LoginRequest $request
     * @return mixed
     */
    public function loginUser(LoginRequest $request)
    {
        $authResult = $this->loginService->loginCheck($request->all());
        if ($authResult) {
            return [
                'token' => Auth::user()->createToken('1')->plainTextToken
            ];
        } else {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }
    }

    /**
     * @param Request $request
     * @return array
     */
    public function authUser(Request $request)
    {
        return ['user' => Auth::user()];
    }
}
