<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prop extends Model
{
    use HasFactory;

    protected $fillable = ['name'];


    public function openings()
    {
        return $this->belongsToMany(Opening::class);
    }
}
