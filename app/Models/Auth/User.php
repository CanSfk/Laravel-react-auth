<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // use HasFactory;

    protected $table = "users";

    protected $fillable = ['name', 'password', 'email'];

    protected $casts = [
        'password' => 'hashed',
    ];
}
