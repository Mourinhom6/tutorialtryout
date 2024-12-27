<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class LandingController extends Controller
{
    public function blog()
{
    // $query = Blog::query();

    // $sortField = request("sort_field", 'created_at');
    // $sortDirection = request("sort_direction", "desc");

    // // Filter by name
    // if ($name = request("name")) {
    //     $query->where("title", "like", "%{$name}%");
    // }

    // if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
    //     $query->where("tag", $tag); // Match the 'tag' column in the database
    // }

    // $blogs = $query->orderBy($sortField, $sortDirection)->paginate(5);

    // return inertia("Client/BlogJSX", [
    //     // "blogs" => $blogs,
    //     "blogs" => BlogResource::collection($blogs),
    //     "queryParams" => request()->query() ?: null,
    // ]);

    $query = Blog::query();

    if (request("name")) {
        $query->where("title", "like", "%" . request("name") . "%");

        logger()->info("Filtering by name:", ['name' => request("name")]);
    }

    if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
        $query->where("tag", $tag); // Match the 'tag' column in the database
    }

    // Default sorting: Most recent blogs first
    $blogs = $query->orderBy('created_at', 'desc')
        ->paginate(5) // 5 items per page
        ->onEachSide(1);

    return inertia("Client/BlogJSX", [
        "blogs" => BlogResource::collection($blogs),
        'queryParams' => request()->query() ?: null, // Name filter state
    ]);

}
    // Filter by tags
//     if ($tags = request("tags")) {
//         $tagsArray = explode(",", $tags);
//         $query->whereHas("tags", function ($q) use ($tagsArray) {
//             $q->whereIn("name", $tagsArray);
//         });
//     }



//     // Paginate blogs (5 per page)
//     dd($blogs, request()->query());


//     dd($query->toSql(), $query->getBindings(), $blogs, request()->query() ?: []);


//     // Return data to the front-end
//     return inertia("Client/BlogJSX", [
//         "blogs" => $blogs,
//         "queryParams" => request()->query() ?: [],
//     ]);
// }

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
