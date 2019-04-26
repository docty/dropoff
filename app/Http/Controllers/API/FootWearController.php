<?php

namespace App\Http\Controllers\API;

use App\Models\Footwear;
use App\Http\Resources\ProductResource;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FootWearController extends Controller
{

    public function index()
    {
    
        return ProductResource::collection(Footwear::all());
    }

    
    public function store(Request $request)
    {
       
    }

  
    public function show($id)
    {
         return  ProductResource::collection(FootWear::where('id', $id)->get());

    }

    
    public function update(Request $request, $id)
    {
        
    }

    
    public function destroy($id)
    {
        
    }
}
