<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function getUsername(Request $request){
        
        $user = $request->user();

        return response()->json($user);
    }
}
