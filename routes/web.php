<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Middleware\CheckAuthenticated;
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
Route::get('/sign-up', function () {
    return Inertia::render('SignupPage', [
        'auth' => [
            'user' => Auth::user(),
        ],
    ]);
});


Route::middleware([CheckAuthenticated::class])->group(function(){
    Route::get('/dashboard', function () {
        return inertia('DashboardPage');        
    });
    Route::get('/completed-task', function() {
        return inertia('CompletedTaskPage');        
    });
    Route::get('/new-task', function() {
        return inertia('NewTaskPage');        
    });

});

Route::get('/unauthenticated', function(){
    return inertia('UnauthenticatedPage');
})->name('Unauthenticated');


//Authentication
Route::post('/user/sign-in', [UserController::class, 'signIn']);
Route::post('/user/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout']);

//event
Route::get('/get-username', [EventController::class, 'getUsername']);

