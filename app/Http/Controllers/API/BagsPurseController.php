<?php

namespace App\Http\Controllers\API;

use App\Models\BagsPurse;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BagsPurseController extends Controller
{
    
    public function index()
    {
        return ProductResource::collection(BagsPurse::paginate());
        return ProductResource::collection(BagsPurse::all());
    }

    
    public function store(Request $request)
    {
        
    }

    
    public function show($id)
    {
        return  ProductResource::collection(BagsPurse::where('id', $id)->get());

    }

    
    public function update(Request $request, $id)
    {
       
    }

    
    public function destroy($id)
    {
        
    }
}
