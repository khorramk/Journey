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
    public function authenticate(Request $request)
    {
        $credentials = $request->only('user', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('dashboard');
        }else{
            
             Auth::logout();

             return redirect('/login');
        }
    }
}
