<?php

namespace App\Http\Controllers;

use App\Models\TrashPickup;
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
        //
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
            'location' => ['required'],
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
        //
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
        //
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
