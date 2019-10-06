<?php

namespace App\Http\Controllers\API\SOCIALBLOCK;

use App\Avatar;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
       return Storage::get('/storage/images/');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $validation = $request->validate([
        //     'file'  =>  'required|file|image|mimes:jpeg,png,gif,jpg|max:2048'
        // ]);

        // $request->images->store('images');
        // $file = $request->input('formData');

        $file = $request->file('image');

        $image  = Storage::disk('public')->putFile('images', $file);

        // $avatar = new Avatar;
        // $avatar->path = $image;
        // $avatar->user_id = Auth::id();
        // $avatar->save();






        // $contents = Storage::get($file);

        // Storage::disk('local')->put('file1.png', $contents);

        // $path = Storage::url('file1.jpg');



            return $image;


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
