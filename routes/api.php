<?php

use Illuminate\Http\Request;

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

Route::apiResources([
    'posts' => 'API\SocialBlock\PostsController',
    'comments' => 'API\SocialBlock\Comments',
    'visited' => 'API\Countries\VisitedController',
    'wishList' => 'API\Countries\WishListController',
    'avatars' => 'API\SocialBlock\AvatarController',
    'likes' => 'API\SocialBlock\LikesController',
    'posts' => 'API\SocialBlock\ReplyController'

]);