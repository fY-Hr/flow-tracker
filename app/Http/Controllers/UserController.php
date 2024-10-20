<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


use function Laravel\Prompts\error;

class UserController extends Controller
{
    public function signIn(Request $request){
        $incomingFields = $request->validate([
            'username' => ['required', 'string', 'max:18', 'min:3', /*Rule::unique('users', 'username')*/],
            'password' => ['required', 'string', 'max:18', 'min:3'],
        ]);

        
        $incomingFields['password'] = bcrypt($incomingFields['password']);
        $checkUsername = User::where('username', $incomingFields['username'])->first();


        if($checkUsername){
            return redirect('/sign-in')->withErrors(['error' => '*Username is already taken*']);
        } else {
            User::create($incomingFields);
            return redirect('/');
        }

        
    }

    public function login(Request $request){
        $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        $credentials = $request->only('username', 'password');

        $user = User::where('username', $credentials['username']);

        if($user && Auth::attempt($credentials)){
            return redirect('/dashboard');
            // return redirect('/dashboard');
        } else {
            return redirect('/')->withErrors(['error' => '*Wrong username or password*']);
            // return redirect('/');
        }
        
        

    }

    public function logout(Request $request){
        
        if(request()->user()){
            Auth::logout();

            $request->session()->invalidate();
            $request->session()->regenerateToken();

            return redirect('/');
        } else {
            return inertia('UnauthenticatedPage');
        }


        

    }
}
