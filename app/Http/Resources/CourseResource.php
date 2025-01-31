<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'line' => $this->linha,
            'type' => $this->type,
            'start_location' => $this->local_ida,
            'end_location' => $this->local_chegada,
            'start_time' => $this->hora_ida ? $this->hora_ida->format('H:i') : null,
            'end_time' => $this->hora_chegada ? $this->hora_chegada->format('H:i') : null,
            'duration' => $this->conducao ? $this->conducao->format('H:i') : null,
            'distance' => $this->kilometers,
        ];
    }
}
