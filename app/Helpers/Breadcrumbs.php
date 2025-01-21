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

        $breadcrumbs[] = ['key' => 'dashboard', 'name' => 'Home', 'url' => route('dashboard')];
        switch ($routeName) {
            case 'dashboard':
                break;
            case 'project.index':
                $breadcrumbs[] = ['key' => 'projects', 'name' => 'Projects', 'url' => route('project.index')];
                break;
            case 'project.create':
                $breadcrumbs[] = ['key' => 'projects', 'name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['key' => 'create_project', 'name' => 'Create', 'url' => route('project.create')];
                break;
            case 'project.show':
                $breadcrumbs[] = ['key' => 'projects', 'name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['key' => 'view_project', 'name' => 'View', 'url' => route('project.show', $routeParams)];
                break;
            case 'project.edit':
                $breadcrumbs[] = ['key' => 'projects', 'name' => 'Projects', 'url' => route('project.index')];
                $breadcrumbs[] = ['key' => 'edit_project', 'name' => 'Edit', 'url' => route('project.edit', $routeParams)];
                break;
            case 'task.index':
                $breadcrumbs[] = ['key' => 'tasks', 'name' => 'Tasks', 'url' => route('task.index')];
                break;
            case 'task.myTasks':
                $breadcrumbs[] = ['key' => 'my_tasks', 'name' => 'My Tasks', 'url' => route('task.myTasks')];
                break;
            case 'task.create':
                $breadcrumbs[] = ['key' => 'tasks', 'name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['key' => 'create_task', 'name' => 'Create', 'url' => route('task.create')];
                break;
            case 'task.show':
                $breadcrumbs[] = ['key' => 'tasks', 'name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['key' => 'view_task', 'name' => 'View', 'url' => route('task.show', $routeParams)];
                break;
            case 'task.edit':
                $breadcrumbs[] = ['key' => 'tasks', 'name' => 'Tasks', 'url' => route('task.index')];
                $breadcrumbs[] = ['key' => 'edit_task', 'name' => 'Edit', 'url' => route('task.edit', $routeParams)];
                break;
            case 'license.index':
                $breadcrumbs[] = ['key' => 'licenses', 'name' => 'Licenses', 'url' => route('license.index')];
                break;
            case 'license.myLicenses':
                $breadcrumbs[] = ['key' => 'my_licenses', 'name' => 'My Licenses', 'url' => route('license.myLicenses')];
                break;
            case 'license.create':
                $breadcrumbs[] = ['key' => 'licenses', 'name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['key' => 'create_license', 'name' => 'Create', 'url' => route('license.create')];
                break;
            case 'license.show':
                $breadcrumbs[] = ['key' => 'licenses', 'name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['key' => 'view_license', 'name' => 'View', 'url' => route('license.show', $routeParams)];
                break;
            case 'license.edit':
                $breadcrumbs[] = ['key' => 'licenses', 'name' => 'Licenses', 'url' => route('license.index')];
                $breadcrumbs[] = ['key' => 'edit_license', 'name' => 'Edit', 'url' => route('license.edit', $routeParams)];
                break;
            case 'user.index':
                $breadcrumbs[] = ['key' => 'users', 'name' => 'Users', 'url' => route('user.index')];
                break;
            case 'user.create':
                $breadcrumbs[] = ['key' => 'users', 'name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['key' => 'create_user', 'name' => 'Create', 'url' => route('user.create')];
                break;
            case 'user.show':
                $breadcrumbs[] = ['key' => 'users', 'name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['key' => 'view_user', 'name' => 'View', 'url' => route('user.show', $routeParams)];
                break;
            case 'user.edit':
                $breadcrumbs[] = ['key' => 'users', 'name' => 'Users', 'url' => route('user.index')];
                $breadcrumbs[] = ['key' => 'edit_user', 'name' => 'Edit', 'url' => route('user.edit', $routeParams)];
                break;
            case 'blogs.index':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'blogs', 'name' => 'Blogs', 'url' => route('blogs.index')];
                break;
            case 'blogs.create':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'blogs', 'name' => 'Blogs', 'url' => route('blogs.index')];
                $breadcrumbs[] = ['key' => 'create_blog', 'name' => 'Create', 'url' => route('blogs.create')];
                break;
            case 'blogs.show':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'blogs', 'name' => 'Blogs', 'url' => route('blogs.index')];
                $breadcrumbs[] = ['key' => 'view_blog', 'name' => 'View', 'url' => route('blogs.show', $routeParams)];
                break;
            case 'blogs.edit':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'blogs', 'name' => 'Blogs', 'url' => route('blogs.index')];
                $breadcrumbs[] = ['key' => 'edit_blog', 'name' => 'Edit', 'url' => route('blogs.edit', $routeParams)];
                break;
            case 'jobs.index':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'jobs', 'name' => 'Jobs', 'url' => route('jobs.index')];
                break;
            case 'jobs.create':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'jobs', 'name' => 'Jobs', 'url' => route('jobs.index')];
                $breadcrumbs[] = ['key' => 'create_job', 'name' => 'Create', 'url' => route('jobs.create')];
                break;
            case 'jobs.show':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'jobs', 'name' => 'Jobs', 'url' => route('jobs.index')];
                $breadcrumbs[] = ['key' => 'view_job', 'name' => 'View', 'url' => route('jobs.show', $routeParams)];
                break;
            case 'jobs.edit':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                $breadcrumbs[] = ['key' => 'jobs', 'name' => 'Jobs', 'url' => route('jobs.index')];
                $breadcrumbs[] = ['key' => 'edit_job', 'name' => 'Edit', 'url' => route('jobs.edit', $routeParams)];
                break;
            case 'edits.index':
                $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
                break;
            case 'escala.index':
                $breadcrumbs[] = ['key' => 'escala', 'name' => 'Escala', 'url' => route('escala.index')];
                    break;

            // case 'edits.create':
            //     $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
            //     $breadcrumbs[] = ['key' => 'create_edit', 'name' => 'Create', 'url' => route('edits.create')];
            //     break;
            // case 'edits.show':
            //     $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
            //     $breadcrumbs[] = ['key' => 'view_edit', 'name' => 'View', 'url' => route('edits.show', $routeParams)];
            //     break;
            // case 'edits.edit':
            //     $breadcrumbs[] = ['key' => 'edits', 'name' => 'Edits', 'url' => route('edits.index')];
            //     $breadcrumbs[] = ['key' => 'edit_edit', 'name' => 'Edit', 'url' => route('edits.edit', $routeParams)];
            //     break;
            case 'profile.edit':
                $breadcrumbs[] = ['key' => 'profile', 'name' => 'Profile', 'url' => route('profile.edit')];
                break;
            default:
                $breadcrumbs[] = ['key' => 'dashboard', 'name' => 'Home', 'url' => route('dashboard')];
                break;
        }
        return $breadcrumbs;
    }
}
