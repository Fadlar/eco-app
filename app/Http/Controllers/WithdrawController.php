<?php

namespace App\Http\Controllers;

use App\Http\Resources\TrashResource;
use App\Http\Resources\WithdrawResource;
use App\Models\TrashPickup;
use App\Models\Withdraw;
use Illuminate\Http\Request;

class WithdrawController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        if ($user->role === "admin") {
            return redirect()->route('pickups.index');
        }
        $done = TrashPickup::where('user_id', $user->id)->whereStatus('done')->latest()->get();
        $withdrawals = $user->withdrawals()->latest()->get();

        return inertia('Withdraw/Index', [
            'done' => TrashResource::collection($done),
            'withdrawals' => WithdrawResource::collection($withdrawals)
        ]);
    }

    public function create()
    {
        return inertia('Withdraw/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'jumlah_uang' => ['required'],
            'nama_bank' => ['required'],
            'no_rekening' => ['required']
        ]);

        $jumlah_poin = ($request->jumlah_uang / 5000) * 100;
        $poin_dimiliki = auth()->user()->userDetail->points;
        $sisa_poin = $poin_dimiliki - $jumlah_poin;

        if ($jumlah_poin > $poin_dimiliki) {
            return inertia('Withdraw/Create', [
                'errors' => [
                    'poin' => "kurang"
                ]
            ]);
        }
        $user = auth()->user();
        $withdrawals = $user->withdrawals()->create([
            "jumlah_poin" => $jumlah_poin,
            "jumlah_uang" => $request->jumlah_uang,
            "nama_bank" => $request->nama_bank,
            "no_rekening" => $request->no_rekening,
        ]);

        if ($withdrawals) {
            $user->userDetail()->update([
                'points' => $sisa_poin === 0 ? null : $sisa_poin
            ]);
        }

        return redirect("/withdrawals");
    }

    public function destroy(Withdraw $withdraw)
    {
        $user = auth()->user();
        $user->userDetail()->update([
            'points' => $withdraw->jumlah_poin,
        ]);
        $withdraw->delete();
        return back();
    }
}
