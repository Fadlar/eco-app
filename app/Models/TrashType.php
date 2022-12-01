<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrashType extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function trashPickups()
    {
        return $this->hasMany(TrashPickup::class);
    }
}
