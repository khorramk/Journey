@extends('layouts.app')
@section('content')

    @auth

        <router-view></router-view>
    @else
        @csrf
        <Login></Login>
    @endauth




    <!--authenticating template-->

@endsection
