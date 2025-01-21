<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
// use App\Http\Resources;
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
        // return [

        //     'id' => $this->id,
        //     'img_main' => $this->img_main,
        //     // && !(str_starts_with($this->img, 'http://') || str_starts_with($this->img, 'https://'))  ? asset('storage/' . $this->img)  : $this->img,
        //     'title' => $this->title,
        //     'subtitle' => $this->subtitle,
        //     'size' => $this->size,
        //     'intro' => $this->intro,
        //     'text1' => $this->text1,
        //     'text2' => $this->text2,
        //     'state' => $this->state,
        //     'createdBy' => new UserResource($this->createdBy),
        //     'updatedBy' => new UserResource($this->updatedBy),
        //     'date' => $this->date->format('Y-m-d'),
        //     'tags' => TagResource::collection($this->tags),
        //     'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
        //     'images' => $this->whenLoaded('images', function () {
        //         return $this->images->map(function ($image) {
        //             return [
        //                 'img' => $image->img,
        //                 'title' => $image->title,
        //             ];
        //         });
        //     }),


        // ];

        return [
            'id' => $this->id,
            'img_main' => $this->img_main,
            'title' => $this->title,
            'importance' => $this->importance,
            'subtitle' => $this->subtitle,
            'size' => $this->size,
            'intro' => $this->intro,
            'text1' => $this->text1,
            'text2' => $this->text2,
            'state' => $this->state,
            'createdBy' => new UserResource($this->whenLoaded('createdBy')),
            'updatedBy' => new UserResource($this->whenLoaded('updatedBy')),
            'date' => (new Carbon($this->date))->format('Y-m-d'),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'images' => $this->whenLoaded('images', function () {
                return $this->images->map(function ($image) {
                    return [
                        'img' => $image->img,
                        'title' => $image->title,
                    ];
                });
            }),
        ];
    }
}
