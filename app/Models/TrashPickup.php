<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrashPickup extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $with = ['trashType', 'user', 'reply'];

    public function trashType()
    {
        return $this->belongsToMany(TrashType::class, 'pickup_types');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reply()
    {
        return $this->hasOne(Reply::class, 'trash_pickup_id');
    }
}
