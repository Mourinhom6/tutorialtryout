<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class BlogResource extends JsonResource
{

    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,
            // 'img' => $this->img,
            // 'img' => $this->img && !(str_starts_with($this->img, 'http')) ? Storage::url($this->img) : '',
            'img' => $this->img && !(str_starts_with($this->img, 'http://') || str_starts_with($this->img, 'https://'))  ? asset('storage/' . $this->img)  : $this->img,
            'tag' => $this->tag,
            'title' => $this->title,
            'description' => $this->description,
            'state' => $this->state,
            // 'authors_name' => $this->authors_name,
            'authors_name' => new UserResource($this->createdBy),
            'date' => (new Carbon($this->created_at))->format('Y-m-d'),

        ];
    }
}
