<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'img',
        'tag',
        'title',
        'description',
        'state',
        'authors_name',
        'date',

    ];

    // public function project()
    // {
    //     return $this->belongsTo(Project::class);
    // }

    // public function assignedUser()
    // {
    //     return $this->belongsTo(User::class, 'assigned_user_id');
    // }

    // public function createdBy()
    // {
    //     return $this->belongsTo(User::class, 'created_by');
    // }

    // public function updatedBy()
    // {
    //     return $this->belongsTo(User::class, 'updated_by');
    // }
}
