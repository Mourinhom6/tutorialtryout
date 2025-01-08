<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'img_main',
        'importance',
        'title',
        'subtitle',
        'size',
        'intro',
        'text1',
        'text2',
        'state',
        'created_by',
        'updated_by',
        'date',

    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function images()
    {
        return $this->hasMany(BlogImage::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

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
