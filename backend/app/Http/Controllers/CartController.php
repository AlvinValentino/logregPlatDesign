<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function addProduct(Request $request) {
        if($data = Seller::findOrFail($request->id_product, ['product_name', 'nett_price'])) {
            Cart::create([
                'id_user' => $request->id_user,
                'id_product' => $request->id_product,
                'name' => $request->name,
                'product_name' => $data['product_name'],
                'nett_price' => $data['nett_price']
            ]);

            return response()->json(['success' => 'Product added to your cart'], 200);
        }
    }

    public function showProduct(Request $request) {
        $data = Cart::where('id_user', $request->id_user)->get();

        return response()->json(['data' => $data]);
    }

    public function destroyProduct(Request $request) {
        $delete = Cart::findOrFail($request->id)->delete();

        if($delete) {
            return response()->json(['success' => 'Product has removed'], 200);
        }
    }

    public function clearProduct(Request $request) {
        $clear = Cart::where('id_user', $request->id_user)->delete();

        if($clear) {
            return response()->json(['success' => 'Product has cleared'], 200);
        }
    }
}
