@extends('layouts.app')

@section('content')
    <form action="/api/login" method="POST">
        <input type="text" name="user" id="">
        <input type="text" name="password" id="">
        <input type="submit" value="login">
    </form>
  <a href="/register"></a>
@endsection
