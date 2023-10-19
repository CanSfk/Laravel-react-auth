<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // use HasFactory;

    protected $table = "users";

    protected $fillable = ['name', 'password', 'email'];

    protected $casts = [
        'password' => 'hashed',
    ];
}