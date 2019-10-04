<?php

namespace App\Http\Controllers\API\SOCIALBLOCK;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
       $contents =  Storage::disk('local')->exists('file1.jpg');
       $infoOFfile = Storage::get('file1.jpg');
        dd($infoOFfile);
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

        $file = $request->input();


        // $contents = Storage::get($file);

        // Storage::disk('local')->put('file1.png', $contents);

        // $path = Storage::url('file1.jpg');



            return $file;


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
