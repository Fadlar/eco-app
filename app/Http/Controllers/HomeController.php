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
            return inertia('Home');
        } else {
            if (auth()->user()->role === "admin") {
                return inertia('Admin/Dashboard');
            } else {
                return inertia('Dashboard');
            }
        }
    }
}
