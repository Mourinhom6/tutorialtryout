<?php

namespace App\Http\Controllers\DashBoard;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Http\Requests\DashBoard\StoreProjectRequest;
use App\Http\Requests\DashBoard\UpdateProjectRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Helpers\Breadcrumbs;
use Illuminate\Support\Facades\Log;


use App\Models\Blog;
use App\Http\Requests\DashBoard\StoreBlogRequest;
use App\Http\Requests\DashBoard\UpdateBlogRequest;
use App\Http\Resources\BlogResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $breadcrumbs = Breadcrumbs::generate();
        $query = Project::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $projects = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        $query2 = Blog::query();

        $blogs2 = $query2->orderBy('created_at', 'desc')->paginate(10);
        // dd($projects, ProjectResource::collection($projects));

        // dd($blogs2, BlogResource::collection($blogs2));


        return inertia("Project/IndexJSX", [
            "projects" => ProjectResource::collection($projects),
            "blogs2" => BlogResource::collection($blogs2),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'breadcum' => $breadcrumbs,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $breadcrumbs = Breadcrumbs::generate();
        return inertia("Project/CreateJSX", [
            'breadcum' => $breadcrumbs,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();
        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        Project::create($data);

        return to_route('project.index')
            ->with('success', 'Project was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project, Blog $blog)
    // public function show(Project $project )

    {
        $breadcrumbs = Breadcrumbs::generate();

        $query = $project->tasks();


        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);
        // Log::info('Blog ID: ' . $blog->id);
        // Log::debug($blog->toArray());

        // dd($blog);

            // dd(new BlogResource($blog));
        return inertia('Project/ShowJSX', [
            'project' => new ProjectResource($project),
            'blog' => new BlogResource($blog),
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'breadcum' => $breadcrumbs,
        ]);
    }

    // public function showstuff(Blog $blog, Project $project )

    // {
    //     $breadcrumbs = Breadcrumbs::generate();

    //     $query = $project->tasks();


    //     $sortField = request("sort_field", 'created_at');
    //     $sortDirection = request("sort_direction", "desc");

    //     if (request("name")) {
    //         $query->where("name", "like", "%" . request("name") . "%");
    //     }
    //     if (request("status")) {
    //         $query->where("status", request("status"));
    //     }

    //     $tasks = $query->orderBy($sortField, $sortDirection)
    //         ->paginate(10)
    //         ->onEachSide(1);
    //     // Log::info('Blog ID: ' . $blog->id);
    //     // Log::debug($blog->toArray());

    //     // dd($blog);

    //         // dd(new BlogResource($blog));
    //     return inertia('Project/ShowJSX', [
    //         'project' => new ProjectResource($project),
    //         'blog' => new BlogResource($blog),
    //         "tasks" => TaskResource::collection($tasks),
    //         'queryParams' => request()->query() ?: null,
    //         'success' => session('success'),
    //         'breadcum' => $breadcrumbs,
    //     ]);
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        // dd($project);
        $breadcrumbs = Breadcrumbs::generate();
        return inertia('Project/EditJSX', [
            'project' => new ProjectResource($project),
            'breadcum' => $breadcrumbs,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($project->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($project->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }
        $project->update($data);

        return to_route('project.index')
            ->with('success', "Project \"$project->name\" was updated");
    }

    public function visibility(UpdateBlogRequest $request, Blog $blog)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $eyes= $data['state'];
        if($eyes == "Visiable"){
            $data['state'] = "Hidden";
        }else{
            $data['state'] = "Visiable";
        }

        // $data['updated_by'] = Auth::id();
        if ($image) {
            if ($blog->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
            }
            $data['image_path'] = $image->store('project/' . Str::random(), 'public');
        }

        $blog->update($data);

        return to_route('project.index')
            ->with('success', "Project \"$blog->name\" was updated");
    }


    // public function showblog(Blog $blog)
    // {
    //     $breadcrumbs = Breadcrumbs::generate();
    //     $query = $blog->tasks();

    //     $sortField = request("sort_field", 'created_at');
    //     $sortDirection = request("sort_direction", "desc");

    //     if (request("name")) {
    //         $query->where("name", "like", "%" . request("name") . "%");
    //     }
    //     if (request("status")) {
    //         $query->where("status", request("status"));
    //     }

    //     $tasks = $query->orderBy($sortField, $sortDirection)
    //         ->paginate(10)
    //         ->onEachSide(1);
    //     return inertia('Project/ShowJSX', [
    //         'blogshow' => new BlogResource($blog),
    //         "tasks" => TaskResource::collection($tasks),
    //         'queryParams' => request()->query() ?: null,
    //         'success' => session('success'),
    //         'breadcum' => $breadcrumbs,
    //     ]);
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function editblog(Blog $blog)
    // {
    //     $breadcrumbs = Breadcrumbs::generate();
    //     return inertia('Project/EditJSX', [
    //         'blogedit' => new BlogResource($blog),
    //         'breadcum' => $breadcrumbs,
    //     ]);
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function updateblog(UpdateBlogRequest $request, Blog $blog)
    // {
    //     $data = $request->validated();
    //     $image = $data['image'] ?? null;
    //     $data['updated_by'] = Auth::id();
    //     if ($image) {
    //         if ($blog->image_path) {
    //             Storage::disk('public')->deleteDirectory(dirname($blog->image_path));
    //         }
    //         $data['image_path'] = $image->store('project/' . Str::random(), 'public');
    //     }
    //     $blog->update($data);

    //     return to_route('project.index')
    //         ->with('success', "Project \"$blog->name\" was updated");
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $name = $project->name;
        $project->delete();
        if ($project->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($project->image_path));
        }
        return to_route('project.index')
            ->with('success', "Project \"$name\" was deleted");
    }
}
