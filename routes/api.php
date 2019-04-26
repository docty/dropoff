<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/allproduct', 'AllProductsController');

Route::group(['prefix' => 'product'], function() {
    Route::apiResource('/womenwear', 'API\WomenWearController');
    Route::apiResource('/menwear', 'API\MenWearController');
    Route::apiResource('/footwear', 'API\FootWearController');
    Route::apiResource('/bags', 'API\BagsPurseController');
});
 