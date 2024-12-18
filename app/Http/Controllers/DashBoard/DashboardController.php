<?php

namespace App\Http\Controllers\DashBoard;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use App\Helpers\Breadcrumbs;

class DashboardController extends Controller
{
    public function index()
    {
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
                'breadcum'
            )
        );
    }
}
