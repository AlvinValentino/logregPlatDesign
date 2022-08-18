<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller {
    public function __invoke(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:6'
        ]);

        if($validator->fails()) {
            return response()->json([
                'title' => 'Validasi Gagal!',
                'message' => 'Coba lagi.'
            ], 401);
        }

        $credentials = $request->only('email', 'password');

        if(!$token = JWTAuth::attempt($credentials)) {
            return response()->json([
                'title' => 'Login gagal!',
                'message' => 'Coba lagi.'
            ], 401);
        }

        return response()->json([
            'message' => 'Login Berhasil!',
            'token' => $token,
            'data' => auth()->user(),
        ], 200);

    }
}