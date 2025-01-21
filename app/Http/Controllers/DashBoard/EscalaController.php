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
use App\Http\Requests\DashBoard\ImportFileRequest;

use Illuminate\Support\Facades\Log;

use App\Imports\EscalaImport;
use App\Imports\ChapaImport;

use Maatwebsite\Excel\Facades\Excel;


class EscalaController extends Controller
{
    public function index()
    {
        $breadcrumbs = Breadcrumbs::generate();
        // // $query = Blog::query();
        // $query = Blog::with(['tags', 'images', 'createdBy', 'updatedBy']);

        // if (request("name")) {
        //     $query->where("title", "like", "%" . request("name") . "%");

        //     logger()->info("Filtering by name:", ['name' => request("name")]);
        // }

        // if ($tag = request("tag")) { // Notice: singular 'tag' matches the column name
        //     $query->whereHas('tags', function ($q) use ($tag) {
        //         $q->where('tags.id', $tag);
        //     });
        // }

        // // Default sorting: Most recent blogs first
        // $edits = $query->orderBy('created_at', 'desc')
        //     ->paginate(12) // 5 items per page
        //     ->onEachSide(1);

        return inertia('Escala/IndexJSX' , [
            // "edits" => BlogResource::collection($edits),
            // 'queryParams' => request()->query() ?: null, // Name filter state
            // 'success' => session('success'),
            'breadcum' => $breadcrumbs,

        ]);
    }

    public function import(ImportFileRequest $request)
    {

        $file = $request->file('ficheiro');
        // dd($file);

        Log::info("File received: " . $file->getClientOriginalName());

        // Store the file

        // $path = $file->store('/uploads/escalas');
        // Excel::import(new EscalaImport, storage_path('app/private/' . $path));


        $path = $file->store('/uploads/chapas');
        Excel::import(new ChapaImport, storage_path('app/private/' . $path));


        // $path = $request->file('ficheiro')->store('uploads/escalas');
        // $file = $request->file('file');


        // // Trigger the import
        // Excel::import(new EscalaImport, $file);

        // dd($file);

        return response()->json(['message' => 'Import successful!']);


        // $now = Carbon::now();
        // $filename = "LicensesExport_{$now->format('d-m-Y_H_i')}.xlsx";
        // return Excel::download(new LicensesExport, $filename);
    }
}
