<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use App\Models\Footwear;
use Illuminate\Http\Request;
use App\Extras\ProductApi;

class PageController extends Controller
{
    public function category(){
    	
		return view('pages.category');
	}
 
	public function cart(){
		//return Route::currentRouteAction();
			# code...
		
		//return new ProductApi();
		return view('pages.cart');
		 //        $client = new \GuzzleHttp\Client();
       //  $request = $client->get('http://dropoff.test/api/allproduct');
        // $response = $request->getBody()->getContents();
       
      //   $response = json_decode($response);
        
        //return ($response);
       // exit;
		
	}

	public function showProduct($id){
		return view('pages.showProduct')->with('id', $id);
	}

	public function checkout(){
		return view('pages.checkout');
	}
}
