<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class RegisterController extends Controller
{
    //
    public function register(Request $request)
    {
       
        $user = new \App\User;
        $password = $request->input('password');
        $user->password = Hash::make($password);
        $user->email = $request->input('email');;
        $user->name = $request->input('user');
        $user->save();

        if (Auth::attempt(['name'=> $user, 'password' => $password ])) {
            // Authentication passed...
            
            return ['passed' => 'passed'];
        }else{
            dd('fail');

             return redirect('/login');
        }
            dd('last');
        return redirect('/login');
      
    }
}
