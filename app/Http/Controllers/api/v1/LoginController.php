<?php

namespace App\Http\Controllers\api\v1;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'account' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($request->only('account', 'password'))) {
            return response()->json(Auth::user(), 200);
        };

        throw ValidationException::withMessages([
            'account' => ['帳號或密碼錯誤！']
        ]);
    }

    public function logout()
    {
        Auth::logout();
    }
}
