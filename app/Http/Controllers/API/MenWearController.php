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
