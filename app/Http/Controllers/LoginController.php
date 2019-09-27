<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /***
    * Handle an authentication attempt.
    *
    * @param  \Illuminate\Http\Request $request
    *
    * @return Response
    */
    public function Login(Request $request)
    {
       
        $password = $request->input('password');
        $user = $request->input('user');        
        if (Auth::attempt(['name'=> $user, 'password' => $password ])) {
            // Authentication passed...
            
            return ['passed' => 'passed'];
        }else{
            

             return back();
        }
        
        return back();

    
    }
}
