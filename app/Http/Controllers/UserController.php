<?php

namespace App\Http\Controllers;

use App\Http\Resources\TrashResource;
use App\Models\TrashPickup;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        if ($user->role === "admin") {
            return redirect()->route('pickups.index');
        }
        $waiting = TrashPickup::where('user_id', $user->id)->whereStatus('waiting')->latest()->get();
        $rejected = TrashPickup::where('user_id', $user->id)->whereStatus('rejected')->latest()->get();
        $pickup = TrashPickup::where('user_id', $user->id)->whereStatus('pickup')->latest()->get();
        $done = TrashPickup::where('user_id', $user->id)->whereStatus('done')->latest()->get();

        return inertia('Profile/Index', [
            'waiting' => TrashResource::collection($waiting),
            'rejected' => TrashResource::collection($rejected),
            'pickup' => TrashResource::collection($pickup),
            'done' => TrashResource::collection($done),
        ]);
    }

    public function show(TrashPickup $profile)
    {
        return inertia('Profile/Show', [
            'pickup' => new TrashResource($profile),
        ]);
    }

    public function edit()
    {
        return inertia('Profile/Edit');
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => ['required'],
            'phone_number' => ['required']
        ]);


        $user->update([
            'name' => $request->name
        ]);

        if ($user->userDetail === null) {
            $pathname = $request->file('avatar')->store('/avatar');
            $user->userDetail()->create([
                'avatar' => $pathname,
                'phone_number' => $request->phone_number,
                'card_number' => $request->card_number,
            ]);
        } else {
            if ($request->avatar === null) {
                $pathname = $user->userDetail->avatar;
            } else {
                if ($user->userDetail->avatar === null) {
                    $pathname = $request->file('avatar')->store('/avatar');
                } else {
                    Storage::delete($user->userDetail->avatar);
                    $pathname = $request->file('avatar')->store('/avatar');
                }
            }
            $user->userDetail()->update([
                'avatar' => $pathname,
                'phone_number' => $request->phone_number,
                'card_number' => $request->card_number,
            ]);
        }

        return redirect()->route('profile.index');
    }

    // Admin

    public function adminIndex()
    {
        return inertia('Admin/Users/Index', [
            'users' => User::with(['userDetail', 'pickups', 'withdrawals'])->whereRole('penjual')->latest()->paginate(),
        ]);
    }

    public function adminShow(User $user)
    {
        return inertia("Admin/Users/Show", [
            'user' => $user
        ]);
    }

    public function setStatus(User $user, Request $request)
    {
        $user->update([
            'status' => $request->status
        ]);
        return back();
    }
}
