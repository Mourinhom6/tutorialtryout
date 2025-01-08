<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
// use App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class OpeningResource extends JsonResource
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
            'title' => $this->title,
            'location' => $this->location,
            'type' => $this->type,
            'subsentence' => $this->subsentence,
            'who_we_are' => $this->who_we_are,
            'what_were_looking' => $this->what_were_looking,
            'props' => PropResource::collection($this->whenLoaded('props')),
            'why_to_apply' => $this->why_to_apply,
            'surroundings' => $this->surroundings,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'state' => $this->state,
            'createdBy' => new UserResource($this->whenLoaded('createdBy')),
            'updatedBy' => new UserResource($this->whenLoaded('updatedBy')),
        ];
    }
}
