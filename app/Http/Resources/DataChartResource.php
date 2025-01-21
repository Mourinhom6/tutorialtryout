<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DataChartResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'datavalue' => $this->datavalue,
            'stat_chart_id' => $this->stat_chart_id,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'statChart' => new StatChartResource($this->statChart),

        ];
    }
}
