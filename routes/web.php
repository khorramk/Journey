<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/login' , function(){
//     return view('login');
// });

// Route::get('/' , function(){
//     return view('dashboard');
// });

Auth::routes();

// Route::prefix('api')->middleware('auth')->group(function () {
//     Route::get('posts', 'api\SocialBlock\PostsController@index');
// });


// Route::get('/' , function(){
//     return view('dashboard');
// });
// Route::get('/login' , function ()
// {
//     return view('dashboard');
// });
// Route::get('/login' , function(){
//     return view('auth.login');
// })->name('login');
Route::prefix('api')->middleware('auth')->group(function () {
    Route::get('/posts' , 'Postscontroller@index');
});


Route::get('/{any}', function(){
    return view('dashboard');
})->where('any', '.*');

    #cod


