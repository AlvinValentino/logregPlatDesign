<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SellerController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'id_seller' => 'required',
            'username' => 'required',
            'product_name' => 'required',
            'product_file' => 'required',
            'category' => 'required',
            'description' => 'required',
            'nett_price' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 422); 
        }

        Seller::create([
            'id_seller' => $request->id_seller,
            'username' => $request->username,
            'product_name' => $request->product_name,
            'product_file' => $request->product_file,
            'category' => $request->category,
            'description' => $request->description,
            'nett_price' => $request->nett_price,
        ]);

        return response()->json(['success' => 'Data input successfully'], 200);
    }

    public function show() {
        // $user = User::leftJoin('product', function($join) {
        //     $join->on('users.id', '=', 'product.id_seller');
        // })->whereNull('product.id_seller')->first([
        //     'users.avatar',
        //     'users.username',
        //     'users.id'
        // ])->get();

        $user = User::first();

        $data = Seller::where('id_seller', '3')->get();
        
        // $user = Seller::with('users')->where('users.id')->get();

        return response()->json(['data' => $data, $user], 200);
    }

    public function search(Request $request) {
        $products = Seller::latest();

        if($request->search) {
            $products->where('product_name', 'like', '%' . $request->search . '%')->orWhere('description', 'like', '%' . $request->search . '%');
        }

        return response()->json(['Products' => $products->get()]);
    }
}
