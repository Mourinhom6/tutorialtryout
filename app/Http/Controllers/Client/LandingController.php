<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function blog()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/BlogJSX');
    }
    public function marketing()
    {
        // return inertia('Client/BlogPageJSX');
        return inertia('Client/MarketingJSX');
    }
}
