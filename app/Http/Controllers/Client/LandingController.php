<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Blog;
use App\Http\Resources\BlogResource;
use App\Http\Requests\DashBoard\StoreBlogRequest;
use App\Http\Requests\DashBoard\UpdateBlogRequest;

use App\Models\Opening;
use App\Http\Resources\OpeningResource;
use App\Http\Requests\DashBoard\StoreOpeningRequest;
use App\Http\Requests\DashBoard\UpdateOpeningRequest;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;


class LandingController extends Controller
{
    public function blog(Request $request)
{

    //  $query2 = Opening::with(['props', 'createdBy', 'updatedBy']);

    // $openingjobs = $query2->orderBy('created_at', 'desc')
    //         ->paginate(5) // 5 items per page
    //         ->onEachSide(1);


    // dd($openingjobs);
    $query = Blog::with(['tags', 'images', 'createdBy', 'updatedBy']);

    if ($title = $request->input('title')) {
        $query->where('title', 'like', '%' . $title . '%');
    }

    if ($tags = $request->input('tags')) {
        $tagNames = explode(',', $tags);
        $query->whereHas('tags', function ($q) use ($tagNames) {
            $q->whereIn('tags.name', $tagNames);
        }, '=', count($tagNames));
    }

    $bloglatest = $query->orderBy('created_at', 'desc')
        ->paginate(10) // 5 items per page
        ->onEachSide(1);

    $blogsmaining = $query->orderBy('importance', 'desc')
        ->paginate(5) // 5 items per page
        ->onEachSide(1);

    Log::info('Received tag filter:', ['tags' => $request->input('tags')]);
    Log::info('SQL query:', ['sql' => $query->toSql(), 'bindings' => $query->getBindings()]);

    return inertia("Client/BlogJSX", [
        "blogsmain" => BlogResource::collection($blogsmaining),
        "bloglatest" => BlogResource::collection($bloglatest),
        'queryParams' => $request->all() ?: null, // Name filter state
    ]);

}

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


    // if (request("name")) {
    //     $query->where("title", "like", "%" . request("name") . "%");

    //     logger()->info("Filtering by name:", ['name' => request("name")]);
    // }

    // if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
    //     $query->whereHas('tags', function ($q) use ($tag) {
    //         $q->where('tags.id', $tag);
    //     });
    // }




    // Tags filter
    // if ($tags = $request->input('tags')) {

    //     $tagIds = explode(',', $tags);
    //     // dd($tagIds, $query->whereHas('tags', $query->whereHas('tags', $query->whereHas('tags');
    //     $query->whereHas('tags', function ($q) use ($tagIds) {
    //         $q->whereIn('tags.id', $tagIds);
    //     }, '=', count($tagIds));
    // }

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
    public function blogshow(string $id)
    {
        // $breadcrumbs = Breadcrumbs::generate();

        // $blog = Blog::find($id);
        $blog = Blog::with(['tags', 'images', 'createdBy', 'updatedBy'])->findOrFail($id);

        // dd($blog);


        // $query = $project->tasks();
        return inertia('Client/BlogShowJSX', [
            'blog' => new BlogResource($blog),
            // 'success' => session('success'),
            // 'breadcum' => $breadcrumbs,
        ]);
    }

    public function jobshow(string $id)
    {
        $job = Opening::with(['props', 'createdBy', 'updatedBy'])->findOrFail($id);

        // dd($job);

        return inertia('Client/JobShowJSX', [
            'job' => new OpeningResource($job),
        ]);
    }

    public function marketing()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/MarketingJSX');
    }

    public function aluger()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/AlugerJSX');
    }

    public function advertise()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/AdvertiseJSX');
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
    public function job(Request $request)
    {


        $query = Opening::with(['props', 'createdBy', 'updatedBy']);

        if ($request->has('role') && $request->role !== '') {
            $query->where('title', $request->role);
        }

        if ($request->has('team') && $request->team !== '') {
            $query->where('surroundings', $request->team);
        }

        if ($request->has('location') && $request->location !== '') {
            $query->where('location', $request->location);
        }

        // $filteredUsers = $query->get();

        $jobsdist=Opening::distinct()->pluck('title');
        $surroundist=Opening::distinct()->pluck('surroundings');
        $placesdist=Opening::distinct()->pluck('location');

        $openingjobs = $query->orderBy('created_at', 'desc')
            ->paginate(5) // 5 items per page
            ->onEachSide(1);

        // Log::info('Received tag filter:', ['tags' => $request->input('tags')]);
        Log::info('SQL query:', ['sql' => $query->toSql(), 'bindings' => $query->getBindings()]);


        // dd($openingjobs);
        return inertia("Client/JobJSX", [
            "Openings" => OpeningResource::collection($openingjobs),
            "Jobsdist" => $jobsdist,
            "Surroundist" => $surroundist,
            "Placesdist" => $placesdist,
            "currentFilters" => [
                'role' => $request->role,
                'team' => $request->team,
                'location' => $request->location,
            ],

            // 'queryParams' => $request->all() ?: null, // Name filter state
        ]);

        // return inertia('Client/BlogPageJSX');
        // return inertia('Client/JobJSX');
    }
}
