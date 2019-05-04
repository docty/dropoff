<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Extras\ProductApi;




class AdminDashboardController extends Controller
{
     public function home()
    {
        return view('admin.index');
    }

     public function addProduct()
    {
        return view('admin.partials.addproduct');
    }

    public function saveProduct(Request $request)
    {
       
        $productapi = new ProductApi();

       return $productapi->storeProduct($request);
         
    }
}
