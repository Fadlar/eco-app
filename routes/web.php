<?php

use App\Http\Controllers\{HomeController, PickupController, TrashPickupController, TrashTypeController, UserController};
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class);

Route::middleware('auth')->group(function () {
    // Admin
    Route::resource('trash-type', TrashTypeController::class)->except([
        'show'
    ]);
    Route::resource('trash-pickups', TrashPickupController::class)->except([
        'create'
    ]);
    // User
    Route::resource('pickups', PickupController::class);
    Route::resource('profile', UserController::class);
});


require __DIR__ . '/auth.php';
