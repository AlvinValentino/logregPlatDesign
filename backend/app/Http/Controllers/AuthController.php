<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:6'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => 'Validation Failed!'], 422);
        }

        if(!$token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['message' => 'Login Failed!'], 401);
        }

        return $this->createNewToken($token);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);

        if($validator->fails()) {
            return response()->json(['message' => 'Validation Failed!'], 422);
        }

        if(User::where('email', $request->email)->exists()) {
            return response()->json(['message' => 'Registration Failed!'], 401);
        }

        User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json(['message' => 'Registration Succesfull!'], 200);
    }

    protected function createNewToken($token) {
        return response()->json(['token' => $token], 200);
    }

    public function editUser(Request $request) {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'email' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }

        $editUser = User::where('id', $request->id)->update([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'phone' => $request->phone,
            'description' => $request->description,
            'avatar' => $request->avatar,
        ]);

        if($editUser) {
            return response()->json(['success' => 'Data was changed'], 200);
        }

    }

    public function showUser(Request $request) {
        $dataUser = User::where('id', $request->id)->get();

        return response()->json(['data' => $dataUser]);
    }
}
