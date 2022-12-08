<?php

namespace App\Http\Controllers;

use App\Models\TrashType;
use Illuminate\Http\Request;

class PickupController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        if ($user->role === "admin") {
            return redirect()->route('pickups.index');
        }
        $trashPickups = $user->pickups()->with('trashType')->paginate();
        return inertia('Pickups/Index', [
            'trashPickups' => $trashPickups
        ]);
    }

    public function create()
    {
        $trashTypes = TrashType::get();
        $trash = [];
        foreach ($trashTypes as $t) {
            array_push($trash, [
                'label' => $t['name'],
                'value' => $t['id'],
            ]);
        }
        return inertia('Pickups/Create', [
            'trashTypes' => $trash
        ]);
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        $request->validate([
            'weight' => ['required', 'numeric'],
            'schedule_start' => ['required'],
            'schedule_end' => ['required'],
            'address' => ['required'],
            'trash_type' => ['required']
        ]);
        $weight = $request->weight;
        $point_earned = $weight * 100;
        $pickups = $user->pickups()->create([
            'weight' => $request->weight,
            'points_earned' => $point_earned,
            'schedule_start' => $request->schedule_start,
            'schedule_end' => $request->schedule_end,
            'address' => $request->address,
        ]);

        $pickups->trashType()->sync((array)$request->trash_type);

        return redirect()->route('pickups.index');
    }
}
