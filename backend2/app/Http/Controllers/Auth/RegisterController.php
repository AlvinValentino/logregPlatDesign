<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class RegisterController extends Controller {
    public function __invoke(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'name' => 'required',
            'email' => 'required|unique:logreg',
            'password' => 'required|min:6'
        ]);

        if($validator->fails()) {
            return response()->json([
                'title' => 'Validasi Gagal!',
                'message' => 'Coba lagi.'
            ], 401);
        };

        if(User::where('email', $request->email)->exists()) {
            return response()->json([
                'title' => 'Registrasi gagal!',
                'message' => 'Coba lagi.'
            ], 401);
        }

        User::create([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'Registrasi Berhasil!'
        ]);
    }
}