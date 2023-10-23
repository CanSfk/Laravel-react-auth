<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class PasswordController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => 'required|current_password',
            'password' => 'required|confirmed',
        ]);


        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();


        // YUKARIDAKI ISLEMIN NASIL YAPILDIGINI ANLAMAK ICIN YAZDIGIM KOD

        // $validated2 = $request->validate([
        //     'current_password' => 'required',
        //     "password" => 'required',
        //     "password_confirmation" => 'required',
        // ]);

        // $password = $request->user()->password;
        // $current_password = $validated2['current_password'];

        // $newPassword = $validated2['password'];
        // $password_confirmed = $validated2['password_confirmation'];

        // if (Hash::check($current_password, $password)) {

        //     if ($newPassword != $password_confirmed)
        //         throw ValidationException::withMessages([
        //             'password' => "Sifreler eslesmiyor lutfen tekrar deneyiniz",
        //         ]);

        //     $request->user()->update([
        //         'password' => Hash::make($newPassword),
        //     ]);

        //     $request->user()->save();
        // } else
        //     throw ValidationException::withMessages(([
        //         'current_password' => "Yanlis sifre girdiniz",
        //     ]));

        // return back();
    }
}
