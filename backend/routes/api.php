<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\SellerController;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/editUser', [AuthController::class, 'editUser']);
Route::post('/showUser', [AuthController::class, 'showUser']);
Route::post('/editAvatar', [AuthController::class, 'editAvatar']);

Route::post('/input', [SellerController::class, 'store']);
Route::post('/show', [SellerController::class, 'show']);

Route::post('/addProduct', [CartController::class, 'addProduct']);
Route::post('/showProduct', [CartController::class, 'showProduct']);
Route::post('/destroyProduct', [CartController::class, 'destroyProduct']);
Route::post('/clearProduct', [CartController::class, 'clearProduct']);