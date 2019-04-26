<?php

namespace App\Http\Controllers;
use App\Models\AllProducts;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class AllProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
           
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AllProducts  $allProducts
     * @return \Illuminate\Http\Response
     */
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
