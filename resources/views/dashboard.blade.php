@extends('layouts.app')
@section('content')
    @auth
    <h1>This is Dashboard</h1>
    <form action="/logout" method="POST">
        @csrf
    <input type="submit" value="log out"></form>
    @endauth
    <h2>error for login</h2>
@endsection