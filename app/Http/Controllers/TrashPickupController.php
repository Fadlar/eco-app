<?php

namespace App\Http\Controllers;

use App\Models\TrashPickup;
use App\Models\User;
use Illuminate\Http\Request;

class TrashPickupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $pickups = TrashPickup::with(['trashType', 'user'])->paginate();
        return inertia('Admin/TrashPickups/Index', [
            'pickups' => $pickups
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'weight' => ['required', 'numeric'],
            'schedule' => ['required'],
            'address' => ['required'],
            'lat' => ['required'],
            'lng' => ['required']
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrashPickup  $trashPickup
     * @return \Illuminate\Http\Response
     */
    public function show(TrashPickup $trashPickup)
    {
        return inertia('Admin/TrashPickups/Show', compact('trashPickup'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrashPickup  $trashPickup
     * @return \Illuminate\Http\Response
     */
    public function edit(TrashPickup $trashPickup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrashPickup  $trashPickup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrashPickup $trashPickup)
    {
        $user = User::whereId($trashPickup->user->id)->first();
        $request->validate([
            'point' => ['required'],
            'weight' => ['required'],
            'description' => ['required'],
            'status' => ['required']
        ]);

        if ($trashPickup->reply === null) {
            $trashPickup->reply()->create([
                'description' => $request->description
            ]);
        } else {
            $trashPickup->reply()->update([
                'description' => $request->description
            ]);
        }

        $trashPickup->update([
            'points_earned' => $request->point,
            'weight' => $request->weight,
            'status' => $request->status,
        ]);

        if ($trashPickup->status === "done") {
            $point_all = $user->userDetail->points + $request->point;
            $user->userDetail()->update([
                'points' => $point_all
            ]);
        }


        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrashPickup  $trashPickup
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrashPickup $trashPickup)
    {
        //
    }
}
