<?php

namespace App\Http\Controllers\DashBoard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class EditsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {        $query = Blog::query();

    if (request("name")) {
        $query->where("title", "like", "%" . request("name") . "%");

        logger()->info("Filtering by name:", ['name' => request("name")]);
    }

    if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
        $query->where("tag", $tag); // Match the 'tag' column in the database
    }

    // Default sorting: Most recent blogs first
    $edits = $query->orderBy('created_at', 'desc')
        ->paginate(5) // 5 items per page
        ->onEachSide(1);

    return inertia('Edits/IndexJSX' , [
        "edits" => BlogResource::collection($edits),
        'queryParams' => request()->query() ?: null, // Name filter state
    ]);

}


}
