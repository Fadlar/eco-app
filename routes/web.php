<?php

use App\Http\Controllers\{AdminWithdrawController, HomeController, PickupController, TrashPickupController, TrashTypeController, UserController, WithdrawController};
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class);

Route::middleware(['auth', 'verified'])->group(function () {
    // Admin
    Route::resource('trash-type', TrashTypeController::class)->except([
        'show'
    ]);
    Route::resource('trash-pickups', TrashPickupController::class)->except([
        'create'
    ]);
    Route::get('penjual', [UserController::class, 'adminIndex']);
    Route::get('penjual/{user}', [UserController::class, 'adminShow']);
    Route::put('penjual/{user}', [UserController::class, 'setStatus']);
    // User
    Route::resource('pickups', PickupController::class);
    Route::resource('profile', UserController::class);
    Route::get('edit/profile', [UserController::class, 'edit']);
    Route::post('edit/profile/{user}', [UserController::class, 'update']);
    Route::prefix("withdrawals")->group(function () {
        Route::get('', [WithdrawController::class, 'index']);
        Route::get('/create', [WithdrawController::class, 'create']);
        Route::post('', [WithdrawController::class, 'store']);
        Route::delete('/{withdraw}', [WithdrawController::class, 'destroy']);
    });
    Route::prefix("withdraws")->group(function () {
        Route::get('', [AdminWithdrawController::class, 'index']);
        Route::get('/{withdraw}', [AdminWithdrawController::class, 'show']);
        Route::get('/{withdraw}/{status}', [AdminWithdrawController::class, 'setStatus']);
    });
});


require __DIR__ . '/auth.php';
