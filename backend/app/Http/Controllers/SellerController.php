<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SellerController extends Controller
{
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'id_seller' => 'required',
            'name' => 'required',
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
            'name' => $request->name,
            'product_name' => $request->product_name,
            'product_file' => $request->product_file,
            'category' => $request->category,
            'description' => $request->description,
            'nett_price' => $request->nett_price,
        ]);

        return response()->json(['success' => 'Data input successfully'], 200);
    }

    public function show() {
        $data = Seller::all();

        return response()->json(['data' => $data], 200);
    }
}
