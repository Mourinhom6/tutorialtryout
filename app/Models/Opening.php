<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opening extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'location',
        'type',
        'subsentence',
        'who_we_are',
        'what_were_looking',
        'props',
        'why_to_apply',
        'surroundings',
        'state',
        'created_by',
        'updated_by',

    ];


    public function props()
    {
        return $this->belongsToMany(Prop::class);
    }


    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
