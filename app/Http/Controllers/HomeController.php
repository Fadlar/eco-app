<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function __invoke(Request $request)
    {
        $isLogin = Auth::check();
        if (!$isLogin) {
            return inertia('Dashboard');
        } else {
            if (auth()->user()->role === "admin") {
                return redirect()->route('trash-pickups.index');
            } else {
                return inertia('Dashboard');
            }
        }
    }
}
