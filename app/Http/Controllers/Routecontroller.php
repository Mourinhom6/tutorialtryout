<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class Routecontroller extends Controller
{
    public function index()
    {
        return inertia('NotificationJSX');
        // return inertia('FixedBottomNavigation');
    }

    public function create()
    {
        return inertia('TestpageTSX');
        // return inertia('MyPage');
    }


}
