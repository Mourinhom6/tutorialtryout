<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChapaResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->chapa,
            'color' => $this->color ? $this->color : null,
            'courses' => CourseResource::collection($this->whenLoaded('courses')),
            'amplitude' => $this->amplitude ? $this->amplitude->format('H:i'): null,
            'extra_hours' => $this->extra_hours ? $this->extra_hours : null,
            'night_hours' => $this->night_hours ? $this->night_hours : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
