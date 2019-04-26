<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    
    

    public function index()
    {
        return view('admin.Partials.login');
    }
 
    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $this->validateLogin($request);
        $credentials = $request->only('email', 'password');
        $email = $request->email;
        $password = $request->password;
       
        if (Auth::attempt(['email' => $email, 'password' => $password, 'role' => 'admin'])) {
            // Authentication passed...
            return redirect()->intended('/admin/dashboard');
        }else{
            return redirect()->intended('/admin');
        }
    }




   
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

     
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }
}
