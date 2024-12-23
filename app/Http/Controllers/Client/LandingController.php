<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Resources\BlogResource;

use Illuminate\Support\Facades\Storage;

class LandingController extends Controller
{
    public function blog()
{
    // Initialize the query builder
    $query = Blog::query();

    // Sorting parameters
    // $sortField = request("sort_field", "created_at");
    // $sortDirection = request("sort_direction", "desc");

    // Filter by name
    if (request("name")) {
        $query->where("title", "like", "%" . request("name") . "%"); // Assuming the blog's searchable name is 'title'
    }

    // Filter by tags
    if (request("tags")) {
        $tags = request("tags"); // Tags passed as a comma-separated string
        $query->whereHas("tags", function ($q) use ($tags) {
            $q->whereIn("name", explode(",", $tags));
        });
    }

    // Fetch and paginate blogs
    // $blogs = $query->orderBy($sortField, $sortDirection);
    $blogs = $query->get()->mapInto(BlogResource::class);



    // Return the data to the frontend
    return inertia("Client/BlogJSX", [
        "blogs" => $blogs, //BlogResource::collection($blogs),
        "queryParams" => request()->query() ?: null,
    ]);
}

    public function marketing()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/MarketingJSX');
    }
    public function terms()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/TermsJSX');
    }
    public function carreer()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/CarreerJSX');
    }
    public function job()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/JobJSX');
    }
}
