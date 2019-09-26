@extends('layouts.app')

@section('content')
    <form action="/api/auth" method="GET">
        <input type="text" name="user" id="1">
        <input type="text" name="email" id="">
        <input type="text" name="password" id="">
        <input type="submit" value="add submit">
    <form>
@endsection