<?php

namespace App\Http\Controllers;
Use App\User;
use Illuminate\Http\Request;
use App\Extras\ProductApi;
use App\Models\BagsPurse;
use App\Models\FootWear;
use App\Models\ManWear;
use App\Models\WomanWear;
use App\Models\Cart;
use App\Models\LatestArrival;



class AdminDashboardController extends Controller
{
     public function home()
    {
        $totalUsers = User::all()->count();
        $totalProduct = BagsPurse::all()->count() + FootWear::all()->count() + ManWear::all()->count() + WomanWear::all()->count();
        $totalOrder = Cart::all()->count();
        $totalNewArrival = LatestArrival::all()->count();
        
        return view('admin.index', ['totalUsers'=> $totalUsers, 'totalProduct' => $totalProduct, 'totalOrder'=> $totalOrder, 'totalNewArrival' => $totalNewArrival]); 
    }

     public function addProduct()
    {
        return view('admin.partials.addproduct');
    } 
    public function order()
    {
        $cart = Cart::all();

        return view('admin.partials.order', ['cart' => $cart]);
    } 

    public function saveProduct(Request $request)
    {
       
        $productapi = new ProductApi();

       return $productapi->storeProduct($request);
         
    }
}
