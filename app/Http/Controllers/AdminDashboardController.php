<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;





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
}
