<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

    //other authenticated Routes goes inside this block


Route::apiResources([

    'comments' => 'api\SocialBlock\CommentsController',
    'visited' => 'api\Countries\VisitedController',
    'wishList' => 'api\Countries\WishListController',
  //  'avatars' => 'api\SocialBlock\AvatarController',
    'likes' => 'api\SocialBlock\LikesController',
    'reply' => 'API\SocialBlock\ReplyController'
]);
