<?php

namespace App\Http\Controllers;

use App\Models\TrashType;
use Illuminate\Http\Request;

class TrashTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = TrashType::paginate();
        return inertia('Admin/TrashType/Index', [
            'types' => $types
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/TrashType/Create');
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
            'name' => ['required']
        ]);
        TrashType::create($request->all());
        return redirect("/trash-type");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrashType  $trashType
     * @return \Illuminate\Http\Response
     */
    public function show(TrashType $trashType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrashType  $trashType
     * @return \Illuminate\Http\Response
     */
    public function edit(TrashType $trashType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrashType  $trashType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrashType $trashType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrashType  $trashType
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrashType $trashType)
    {
        //
    }
}
