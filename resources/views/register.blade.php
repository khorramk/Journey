@extends('layouts.app')

@section('content')
    <form action="/api/register" method="POST">
        <input type="text" name="user" id="">
        <input type="text" name="password" id="">
        <input type="submit" value="login">
    </form>

@endsection
