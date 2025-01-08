<?php

namespace App\Http\Controllers\DashBoard;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Helpers\Breadcrumbs;
use App\Http\Requests\DashBoard\StoreBlogRequest;
use App\Http\Requests\DashBoard\UpdateBlogRequest;


class EditsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $breadcrumbs = Breadcrumbs::generate();
        // $query = Blog::query();
        $query = Blog::with(['tags', 'images', 'createdBy', 'updatedBy']);

        if (request("name")) {
            $query->where("title", "like", "%" . request("name") . "%");

            logger()->info("Filtering by name:", ['name' => request("name")]);
        }

        if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
            $query->whereHas('tags', function ($q) use ($tag) {
                $q->where('tags.id', $tag);
            });
        }

        // Default sorting: Most recent blogs first
        $edits = $query->orderBy('created_at', 'desc')
            ->paginate(12) // 5 items per page
            ->onEachSide(1);

        return inertia('Edits/IndexJSX' , [
            "edits" => BlogResource::collection($edits),
            'queryParams' => request()->query() ?: null, // Name filter state
            'success' => session('success'),
            'breadcum' => $breadcrumbs,
        ]);
    }



    public function show(Blog $blog, string $id)
    // public function show(Project $project )

    {
        $breadcrumbs = Breadcrumbs::generate();

        // $blog = Blog::find($id);
        $blog = Blog::with(['tags', 'images', 'createdBy', 'updatedBy'])->findOrFail($id);

        // dd($blog);

        // $query = $project->tasks();
    return inertia('Edits/ShowJSX', [
        'edit' => new BlogResource($blog),
        'success' => session('success'),
        'breadcum' => $breadcrumbs,
    ]);
}

        // $sortField = request("sort_field", 'created_at');
        // $sortDirection = request("sort_direction", "desc");

        // if (request("name")) {
        //     $query->where("name", "like", "%" . request("name") . "%");
        // }
        // if (request("status")) {
        //     $query->where("status", request("status"));
        // }

        // $tasks = $query->orderBy($sortField, $sortDirection)
        //     ->paginate(10)
        //     ->onEachSide(1);
        // Log::info('Blog ID: ' . $blog->id);
        // Log::debug($blog->toArray());

        // dd($blog);

            // dd(new BlogResource($blog));
    //     return inertia('Edits/ShowJSX', [
    //         // 'project' => new ProjectResource($project),
    //         'edit' => new BlogResource($blog),
    //         // "tasks" => TaskResource::collection($tasks),
    //         'queryParams' => request()->query() ?: null,
    //         'success' => session('success'),
    //         'breadcum' => $breadcrumbs,
    //     ]);
    // }


    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $blog = $request->validated();

        // dd("update");

        // dd($data, $blog, $request);
        // $image = $data['image'] ?? null;
        // $eyes= $data['state'];
        // if($eyes == "Visiable"){
        //     $data['state'] = "Hidden";
        // }else{
        //     $data['state'] = "Visiable";
        // }

        $blog->update([
            'state' => $blog->state === 'published' ? 'archived' : 'published'
        ]);

        // $data['updated_by'] = Auth::id();
        // if ($image) {
        //     if ($blog->image_path) {
        //         Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
        //     }
        //     $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        // }

        // $blog->update($data);

        return to_route('edits.index')
            ->with('success', "Edit \"$blog->name\" was updated");
    }





}
