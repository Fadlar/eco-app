<?php

namespace App\Http\Controllers;

use App\Models\Withdraw;
use Illuminate\Http\Request;

class AdminWithdrawController extends Controller
{
    public function index()
    {
        $withdraw = Withdraw::with('user')->latest()->paginate();
        return inertia('Admin/Withdrawals/Index', [
            'withdrawals' => $withdraw
        ]);
    }

    public function show(Withdraw $withdraw)
    {
        return inertia('Admin/Withdrawals/Show', [
            'wd' => $withdraw->load('user')
        ]);
    }

    public function setStatus(Withdraw $withdraw, $status)
    {
        $poin = $withdraw->user->userDetail->points;
        $withdraw->update([
            'status' => $status
        ]);
        if ($status === "cancel") {
            $withdraw->user->userDetail()->update([
                "points" => $poin + $withdraw->jumlah_poin
            ]);
        }
        return back();
    }
}
