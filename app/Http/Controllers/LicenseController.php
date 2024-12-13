<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\LicenseResource;
use App\Http\Resources\UserResource;
use App\Models\Project;
use App\Models\License;
use App\Helpers\CustomNavigation;
use App\Http\Requests\StoreLicenseRequest;
use App\Http\Requests\UpdateLicenseRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Helpers\Breadcrumbs;
use App\Exports\LicensesExport;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;




class LicenseController extends Controller
{
    public function index()
    {
        $breadcrumbs = Breadcrumbs::generate();
        // $customRouting = CustomNavigation::generate();
        $query = License::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("NOME")) {
            $query->where("NOME", "like", "%" . request("NOME") . "%");
        }
        if (request("STATE")) {
            $query->where("STATE", request("STATE"));
        }

        $licenses = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("License/IndexJSX", [
            // 'CustomRouteing' => $customRouting,
            "licenses" => LicenseResource::collection($licenses),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'breadcum' => $breadcrumbs,
        ]);
    }

    public function create()
    {
        $breadcrumbs = Breadcrumbs::generate();
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();

        return inertia("License/CreateJSX", [
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'breadcum' => $breadcrumbs,
        ]);
    }

    public function store(StoreLicenseRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        License::create($data);

        return to_route('license.index')
            ->with('success', 'License was created');
    }

    public function show(License $license)
    {
        $breadcrumbs = Breadcrumbs::generate();
        return inertia('License/ShowJSX', [
            'license' => new LicenseResource($license),
            'breadcum' => $breadcrumbs,
        ]);
    }

    public function edit(License $license)
    {
        $breadcrumbs = Breadcrumbs::generate();
        $projects = Project::query()->orderBy('name', 'asc')->get();
        $users = User::query()->orderBy('name', 'asc')->get();

        return inertia("License/EditJSX", [
            'license' => new LicenseResource($license),
            'projects' => ProjectResource::collection($projects),
            'users' => UserResource::collection($users),
            'breadcum' => $breadcrumbs,
        ]);
    }

    public function update(UpdateLicenseRequest $request, License $license)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        $license->update($data);

        return to_route('license.index')
            ->with('success', "License \"$license->name\" was updated");
    }

    public function destroy(License $license)
    {
        $name = $license->name;
        $license->delete();
        return to_route('license.index')
            ->with('success', "License \"$name\" was deleted");
    }

    public function myLicenses()
    {
        $breadcrumbs = Breadcrumbs::generate();
        $user = auth()->user();
        $query = License::query()->where('assigned_user_id', $user->id);

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $licenses = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("License/IndexJSX", [
            "licenses" => LicenseResource::collection($licenses),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'breadcum' => $breadcrumbs,
        ]);
    }
    public function export()
    {
        $now = Carbon::now();
        $filename = "LicensesExport_{$now->format('d-m-Y_H_i')}.xlsx";
        return Excel::download(new LicensesExport, $filename);
    }
}
















// use App\Http\Resources\LicenseResource;
// use App\Models\License;
// use App\Http\Requests\StoreLicenseRequest;
// use App\Http\Requests\UpdateLicenseRequest;
// namespace App\Http\Controllers;

// use App\Http\Resources\ProjectResource;
// use App\Http\Resources\LicenseResource;
// use App\Http\Resources\UserResource;
// use App\Models\Project;
// use App\Models\License;
// use App\Http\Requests\StoreLicenseRequest;
// use App\Http\Requests\UpdateLicenseRequest;
// use App\Models\User;
// use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Storage;
// use Illuminate\Support\Str;
// use App\Helpers\Breadcrumbs;

// class LicenseController extends Controller
// {

//     public function index()
//     {
//         $breadcrumbs = Breadcrumbs::generate();
//         $query = License::query();

//         if (request("name")) {
//             $query->where("name", "like", "%" . request("name") . "%");
//         }
//         if (request("status")) {
//             $query->where("status", request("status"));
//         }

//         $licenses = $query->orderBy($sortField, $sortDirection)
//             ->paginate(10)
//             ->onEachSide(1);

//         return inertia("License/IndexJSX", [
//             "licenses" => LicenseResource::collection($licenses),
//             'queryParams' => request()->query() ?: null,
//             'success' => session('success'),
//             'breadcum' => $breadcrumbs,
//         ]);
//     }


//     public function create()
//     {
//         $breadcrumbs = Breadcrumbs::generate();
//         $projects = Project::query()->orderBy('name', 'asc')->get();
//         $users = User::query()->orderBy('name', 'asc')->get();

//         return inertia("License/CreateJSX", [
//             'projects' => ProjectResource::collection($projects),
//             'users' => UserResource::collection($users),
//             'breadcum' => $breadcrumbs,
//         ]);
//     }


//     public function store(StoreLicenseRequest $request)
//     {
//         $data = $request->validated();
//         $data['created_by'] = Auth::id();
//         $data['updated_by'] = Auth::id();
//         License::create($data);

//         return to_route('license.index')
//             ->with('success', 'License was created');
//     }


//     public function show(License $license)
//     {
//         $breadcrumbs = Breadcrumbs::generate();
//         return inertia('License/ShowJSX', [
//             'license' => new LicenseResource($license),
//             'breadcum' => $breadcrumbs,
//         ]);
//     }


//     public function edit(License $license)
//     {
//         $breadcrumbs = Breadcrumbs::generate();
//         $projects = Project::query()->orderBy('name', 'asc')->get();
//         $users = User::query()->orderBy('name', 'asc')->get();

//         return inertia("License/EditJSX", [
//             'license' => new LicenseResource($license),
//             'projects' => ProjectResource::collection($projects),
//             'users' => UserResource::collection($users),
//             'breadcum' => $breadcrumbs,
//         ]);
//     }


//     public function update(UpdateLicenseRequest $request, License $license)
//     {
//         $data = $request->validated();
//         $data['updated_by'] = Auth::id();
//         $license->update($data);

//         return to_route('license.index')
//             ->with('success', "License \"$license->name\" was updated");
//     }


//     public function destroy(License $license)
//     {
//         $name = $license->name;
//         $license->delete();
//         return to_route('license.index')
//             ->with('success', "License \"$name\" was deleted");
//     }

//     public function myLicenses()
//     {
//         $breadcrumbs = Breadcrumbs::generate();
//         $user = auth()->user();
//         $query = License::query()->where('assigned_user_id', $user->id);

//         $sortField = request("sort_field", 'created_at');
//         $sortDirection = request("sort_direction", "desc");

//         if (request("name")) {
//             $query->where("name", "like", "%" . request("name") . "%");
//         }
//         if (request("status")) {
//             $query->where("status", request("status"));
//         }

//         $licenses = $query->orderBy($sortField, $sortDirection)
//             ->paginate(10)
//             ->onEachSide(1);

//         return inertia("License/IndexJSX", [
//             "licenses" => LicenseResource::collection($licenses),
//             'queryParams' => request()->query() ?: null,
//             'success' => session('success'),
//             'breadcum' => $breadcrumbs,
//         ]);
//     }
// }
