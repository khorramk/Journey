<?php

namespace App\Http\Controllers\API\COUNTRIES;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use \App\Visited;
use Auth;
class VisitedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
        
        $visited = Visited::where('users_id', Auth::id())->get();
        return ['visited'=> $visited];

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->file('image'));
        //store the  countrie
        // dd($request->search);
        $visited = new Visited;
        //need to fix the search string and put in to country_name
        $visited->country_name = $request->search;
        $file = $request->file('image');
        $image = Storage::disk('public')->putFile('images', $file);
        $visited->images = $image;
        $visited->users_id = Auth::id();
        $visited->save();
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
