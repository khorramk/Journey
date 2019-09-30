@extends('layouts.app')
@section('content')
    @auth
    <router-view></router-view>
    @endauth
    <h2>error for login</h2>
    <!--authenticating template-->
    <not-loggedin></not-loggedin>
@endsection