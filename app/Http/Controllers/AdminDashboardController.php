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
    function __construct()
    {
        $this->totalFootwear = FootWear::all()->count();
        $this->totalBagsPurse = BagsPurse::all()->count();
        $this->totalWomanwear = WomanWear::all()->count();
        $this->totalManwear = ManWear::all()->count();

    }
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

    public function latestProduct()
    {
        
        $foot = FootWear::all()->find([$this->totalFootwear-1, $this->totalFootwear]);
        $bags = BagsPurse::all()->find([$this->totalBagsPurse-1, $this->totalBagsPurse]);
        $men =  ManWear::all()->find([$this->totalManwear-1, $this->totalManwear]);
        $women = WomanWear::all()->find([$this->totalWomanwear-1, $this->totalWomanwear]);
       
        $arrayName = array( $foot, $bags, $men,$women );
         return view('admin.partials.latestproduct', ['cart' => $arrayName]);
    }

    public function saveProduct(Request $request)
    {
       $productapi = new ProductApi();
        return $productapi->storeProduct($request);
    }

     public function saveLatest(Request $request)
    {
       
        return $request->all();
    }
}
