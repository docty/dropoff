<?php

namespace App\Http\Controllers;
use App\Models\AllProducts;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class AllProductsController extends Controller
{
     
    function __construct()
    {
        //$this->middleware('auth:api');
    }

    public function index()
    {


       $data =   ProductResource::collection(AllProducts::all());
        return response()->json($data);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
           $http = new  \GuzzleHttp\Client();

        $response = $http->post('http://dropoff.test/oauth/token', [
    'form_params' => [
        'grant_type' => 'password',
        'client_id' => '4',
        'client_secret' => 'PzRYoBh0KugGhEN0mccn2YPhcczkKe231fg72pwD',
        'username' => 'docty@test.com',
        'password' => '12345678',
        'scope' => '*',
    ],
]);

return json_decode((string) $response->getBody(), true)['access_token'];
    }

       
    public function show($id, AllProducts $allProducts)
    {
        return ProductResource::collection(AllProducts::where('id', $id )->get());
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AllProducts  $allProducts
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AllProducts $allProducts)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AllProducts  $allProducts
     * @return \Illuminate\Http\Response
     */
    public function destroy(AllProducts $allProducts)
    {
        //
    }
}
