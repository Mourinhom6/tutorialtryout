<?php

namespace App\Http\Controllers\DashBoard;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Helpers\Breadcrumbs;

use App\Http\Resources\DataChartResource;
use App\Models\DataChart;

use App\Models\StatChart;
use App\Http\Resources\StatChartResource;

class DashboardController extends Controller
{
    public function index()
    {
        // $lineDrivers = StatChart::query()
        // // ->whereIn('status', ['pending', 'in_progress'])
        // ->where('assigned_user_id', $user->id)
        // ->limit(10)
        // ->get();

        // $lineDrivers = StatChart::collection($activeTasks)
        //     ->where('status', 'pending');

        // $statChart = StatChart::findOrFail($id);

        $query = StatChart::query();

        // $period = $request->input('period', '7d'); // Default to 7 days if not specified

        $statcharts = $query->whereIn('title', ['Reclamações', 'Motoristas', 'Smth1', 'Smth2'])
        ->select('id', 'title')
        ->distinct()
        ->get();

        // $statcharts2 = StatChartResource::collection($statcharts);//is this necessary

                // dd($statcharts, $statcharts2);

        // $statChartsWithData2 = StatChart::whereIn('id', $statcharts->pluck('id'))
        // ->with('dataCharts')
        // ->get()
        // ->map(function ($statChart) use ($period) {
        //     $statChart->value_percentage = $statChart->getValuePercentageAttribute($period);
        //     return $statChart;
        // });

    // return $statChartsWithData2;

        $statChartsWithData = StatChart::whereIn('id', $statcharts->pluck('id'))
            // ->with('dataCharts')
            ->with(['dataCharts' => function($query) {
                $query->orderBy('created_at', 'desc')->limit(30);
            }])
            ->get();


            // $formattedStatCharts = $statChartsWithData->map(function ($statChart) {
            //     return [
            //         'id' => $statChart->id,
            //         'title' => $statChart->title,
            //         'dataCharts' => DataChartResource::collection($statChart->dataCharts)
            //     ];
            // });



            // dd($statChartsWithData , $statChartsWithData2);





        // $dataStats = DataChart::query()
        //     ->where('stat_chart_id', 1)
        //     ->get();

        // $dataStats = DataChartResource::collection($dataStats);

        // dd($stats, $dataStats);


        $breadcum = Breadcrumbs::generate();
        $user = auth()->user();

        $totalPendingTasks = Task::query()
            ->where('status', 'pending')
            ->count();
        $myPendingTasks = Task::query()
            ->where('status', 'pending')
            ->where('assigned_user_id', $user->id)
            ->count();

        $totalProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->count();
        $myProgressTasks = Task::query()
            ->where('status', 'in_progress')
            ->where('assigned_user_id', $user->id)
            ->count();

        $totalCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->count();
        $myCompletedTasks = Task::query()
            ->where('status', 'completed')
            ->where('assigned_user_id', $user->id)
            ->count();

        $activeTasks = Task::query()
            ->whereIn('status', ['pending', 'in_progress'])
            ->where('assigned_user_id', $user->id)
            ->limit(10)
            ->get();
        $activeTasks = TaskResource::collection($activeTasks);
        return inertia(
            'DashboardJSX',
            // [
            //     'breadcrumbs' => $breadcrumbs, // Pass the breadcrumbs
            //     'totalPendingTasks' => $totalPendingTasks,
            //     'myPendingTasks' => $myPendingTasks,
            //     'totalProgressTasks' => $totalProgressTasks,
            //     'myProgressTasks' => $myProgressTasks,
            //     'totalCompletedTasks' => $totalCompletedTasks,
            //     'myCompletedTasks' => $myCompletedTasks,
            //     'activeTasks' => $activeTasks
            // ]
            compact(
                'totalPendingTasks',
                'myPendingTasks',
                'totalProgressTasks',
                'myProgressTasks',
                'totalCompletedTasks',
                'myCompletedTasks',
                'activeTasks',
                'breadcum',
                'statChartsWithData',
            )
        );
    }
}
