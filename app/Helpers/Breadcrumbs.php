<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Route;

class Breadcrumbs
{
    public static function generate()
    {
        $breadcrumbs = [];
        $currentRoute = Route::current();
        $routeName = $currentRoute->getName();
        $routeParams = $currentRoute->parameters();

        $breadcrumbs[] = ['name' => 'Home', 'url' => route('dashboard')];
        switch ($routeName) {
            case 'dashboard':
                break;
            case 'project.index':
                $breadcrumbs[] = ['name' => 'Projects', 'url' => route('project.index')];
                break;
            case 'project.create':
                $breadcrumbs[] = ['name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['name' => 'Create', 'url' => route('project.create')];
                break;
            case 'project.show':
                $breadcrumbs[] = ['name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['name' => 'View', 'url' => route('project.show', $routeParams)];
                break;
            case 'project.edit':
                $breadcrumbs[] = ['name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['name' => 'Edit', 'url' => route('project.edit', $routeParams)];
                break;
            case 'task.index':
                $breadcrumbs[] = ['name' => 'Tasks', 'url' => route('task.index')];
                break;
            case 'task.myTasks':
                $breadcrumbs[] = ['name' => 'My Tasks', 'url' => route('task.myTasks')];
                break;
            case 'task.create':
                $breadcrumbs[] = ['name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['name' => 'Create', 'url' => route('task.create')];
                break;
            case 'task.show':
                $breadcrumbs[] = ['name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['name' => 'View', 'url' => route('task.show', $routeParams)];
                break;
            case 'task.edit':
                $breadcrumbs[] = ['name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['name' => 'Edit', 'url' => route('task.edit', $routeParams)];
                break;
            case 'license.index':
                $breadcrumbs[] = ['name' => 'Licenses', 'url' => route('license.index')];
                break;
            case 'license.myLicenses':
                $breadcrumbs[] = ['name' => 'My Licenses', 'url' => route('license.myLicenses')];
                break;
            case 'license.create':
                $breadcrumbs[] = ['name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['name' => 'Create', 'url' => route('license.create')];
                break;
            case 'license.show':
                $breadcrumbs[] = ['name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['name' => 'View', 'url' => route('license.show', $routeParams)];
                break;
            case 'license.edit':
                $breadcrumbs[] = ['name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['name' => 'Edit', 'url' => route('license.edit', $routeParams)];
                break;
            case 'user.index':
                $breadcrumbs[] = ['name' => 'Users', 'url' => route('user.index')];
                break;
            case 'user.create':
                $breadcrumbs[] = ['name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['name' => 'Create', 'url' => route('user.create')];
                break;
            case 'user.show':
                $breadcrumbs[] = ['name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['name' => 'View', 'url' => route('user.show', $routeParams)];
                break;
            case 'user.edit':
                $breadcrumbs[] = ['name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['name' => 'Edit', 'url' => route('user.edit', $routeParams)];
                break;
            case 'profile.edit':
                $breadcrumbs[] = ['name' => 'Profile', 'url' => route('profile.edit')];
                break;
            default:
                $breadcrumbs[] = ['name' => 'Dashboard', 'url' => route('dashboard')];
                break;
        }
        return $breadcrumbs;
    }
}
