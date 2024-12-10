<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class LicenseResource extends JsonResource
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
            'NOME' => $this->NOME,
            'EXTRA' => $this->EXTRA,
            'EXPIRE_DATE' => (new Carbon($this->EXPIRE_DATE))->format('Y-m-d'),
            'TIME_EXPANSE' => (new Carbon($this->TIME_EXPANSE))->format('Y-m-d'),
            'TIPO' => $this->TIPO,
            'STATE' => $this->STATE,
            'NUM' => $this->NUM,
            'ATRIBUICAO' => $this->ATRIBUICAO,

            // 'image_path' => $this->image_path && !(str_starts_with($this->image_path, 'http')) ?
            //     Storage::url($this->image_path) : '',
            // 'project_id' => $this->project_id,   Add the stuff Where I get the num from the bus table
            // 'project' => new ProjectResource($this->project),
            // 'assignedUser' => $this->assignedUser ? new UserResource($this->assignedUser) : null,
            // 'createdBy' => new UserResource($this->createdBy),
            // 'updatedBy' => new UserResource($this->updatedBy),
        ];
    }
}
