<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use App\Models\BillingAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{


		public function getCart()
		{
					return Cart::where('email', 'docty@test.com')->get();
		}

     	public function addToCart(Request $request){

		$cart = new Cart();
		$cart->name = $request->name;
		$cart->size = $request->size;
		$cart->quantity = $request->quantity;
		$cart->price = $request->price;
		$cart->filename = $request->filename;
		$cart->description = $request->description;
		//$cart->email = Auth::user()->email;
		$cart->email = $request->email;

		$cart->save();
		return "Added successfully";
		//return redirect()->route('category')->withCartAdd(__('Cart successfully added.'));

	}


	public function placeOrder(Request $request)
	{
		$read = Cart::where('email', Auth::user()->email)->get();
		$cover = array() ;
		foreach ($read as $value) {
			$list = array();
			array_push($list, ['name' =>$value->name], ['price' =>$value->price]);
			array_push($cover, $list);
		}


		$billing = new BillingAddress();
		$billing->email =  Auth::user()->email;
		$billing->address = $request->address;
		$billing->region =  $request->region;
		$billing->country = $request->country;
		$billing->number = $request->number;
		$billing->shipping = $request->shipping;
		$billing->payment = $request->payment;
		$billing->items =  json_encode($cover);
		$billing->save();

		return "Congratulation for shopping with dropoff";
	}


	public function getBillingInfo()
	{



		return BillingAddress::where('email', Auth::user()->email )->get();
	}
}
