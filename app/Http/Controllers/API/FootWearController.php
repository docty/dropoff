<?php

namespace App\Http\Controllers\API;

use App\Models\Footwear;
use App\Http\Resources\ProductResource;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class FootWearController extends Controller
{

 function __construct()
    {
       // $this->middleware('auth:api');
    }

    public function index()
    {
       
        return ProductResource::collection(Footwear::all());
    }

    
    public function store(Request $request)
    {
        $footwear = new FootWear();
        $footwear->name = $request->productName;
        $footwear->price = $request->price;
        $footwear->filename = $request->filename;
        $footwear->type = $request->type;
        $footwear->description = $request->description;
        $footwear->save();
      
        return 'Product Uploaded Successfully';
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
