<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
// use App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class StatChartResource extends JsonResource
{

    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        // $datacharts = $this->whenLoaded('datachart');
        // $latestDatachart = $datacharts->sortByDesc('created_at')->first();
        // $oldestDatachart = $datacharts->sortByDesc('created_at')->take(30)->last();

        // $percentageDifference = null;
        // if ($oldestDatachart && $latestDatachart && $oldestDatachart->datavalue != 0) {
        //     $percentageDifference = (($latestDatachart->datavalue - $oldestDatachart->datavalue) / $oldestDatachart->datavalue) * 100;
        // }

        return [
            'id' => $this->id,
            'title' => $this->title,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),

            // 'datachart' => DataChartResource::collection($datacharts),
            // 'data' => round($percentageDifference, 2),

        // return [




        //     'id' => $this->id,
        //     'title' => $this->title,
        //     'datachart' => DataChartResource::collection($datacharts),
        //     'data' => //somehow apply this formula: (Day30Value - Day1Value) / Day1Value) * 100 being the Day1Value the 30th latest datachart and the Day30Value the latest datachart

        ];
    }
}
