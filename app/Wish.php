<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wish extends Model
{
    //
      /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'country_name',
        'users_id'
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var string[]
     */
    protected $casts = [
        'id' => 'int',
        'country_name' => 'string',
        'users_id'   => 'int',
    ];
    /**
     * The validation rules.
     *
     * @var string[]
     */
    public $rules = [
        'id' => 'nullable|int',
        'country_name' => 'required|string',
        'users_id'   => 'required|int'
     
    ];
    
}
