<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrashPickup extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function trashType()
    {
        return $this->belongsToMany(TrashType::class, 'pickup_types');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
