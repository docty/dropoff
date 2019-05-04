<?php

namespace App\Http\Controllers\API;

use App\Models\WomanWear;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WomenWearController extends Controller
{

    public function index()
    {
        $type = $_GET['type'];
        return ProductResource::collection(WomanWear::where('type', $type)->get());
    }

   
    public function store(Request $request)
    {
        $womenwear = new WomanWear();
        $womenwear->name = $request->productName;
        $womenwear->price = $request->price;
        $womenwear->filename = $request->filename;
        $womenwear->type = $request->type;
        $womenwear->description = $request->description;
        $womenwear->save();
       
      
        return 'Product Uploaded Successfully';
    }

    
    public function show($id)
    {
        return  ProductResource::collection(WomanWear::where('id', $id)->get());
    }

    
    public function update(Request $request, $id)
    {
       
    }

    
    public function destroy($id)
    {
       
    }
}
