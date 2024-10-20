<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

//Page
Route::get('/', function () {
    return Inertia::render('LoginPage', [
        'auth' => [
            'user' => Auth::user(),
        ],
    ]);    
});
Route::get('/dashboard', function () {

    if(request()->user()){
        return inertia('DashboardPage');        
    } else {
        return inertia('UnauthenticatedPage');
    }

});
Route::get('/sign-in', function () {
    return Inertia::render('SignInPage', [
        'auth' => [
            'user' => Auth::user(),
        ],
    ]);
});



//Authentication
Route::post('/user/sign-in', [UserController::class, 'signIn']);
Route::post('/user/login', [UserController::class, 'login']);

Route::post('/logout', [UserController::class, 'logout']);
Route::get('/logout', [UserController::class, 'logout']);

