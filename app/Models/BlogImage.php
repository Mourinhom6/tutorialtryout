<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogImage extends Model
{
    use HasFactory;

    protected $fillable = ['blog_id', 'img', 'title'];

    public function bloggallery()
    {
        return $this->belongsTo(Blog::class);
    }
}
