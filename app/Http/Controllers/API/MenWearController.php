<?php

namespace App\Http\Controllers\API;

use App\Models\ManWear;
use App\Http\Resources\ProductResource;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MenWearController extends Controller
{

    public function index()
    {
        $type = $_GET['type'];
        return ProductResource::collection(ManWear::where('type', $type)->get());
    }

    
    public function store(Request $request)
    {
        $menwear = new ManWear();
        $menwear->name = $request->productName;
        $menwear->price = $request->price;
        $menwear->filename = $request->filename;
        $menwear->type = $request->type;
        $menwear->description = $request->description;
        $menwear->save();
       
      
        return 'Product Uploaded Successfully';
    }

    
    public function show($id)
    {
        return  ProductResource::collection(ManWear::where('id', $id)->get());

    }

    
    public function update(Request $request, $id)
    {
       
    }

    
    public function destroy($id)
    {
       
    }
}
