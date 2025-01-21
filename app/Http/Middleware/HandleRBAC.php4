<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RBAC
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, \Closure $next): Response
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Autenticação necessária.');
        }

        $userType = Auth::user()->tipo;
        // if ($userType == 1 || $userType == 2) {
        if ($userType >= 2) {

            return $next($request);
        }

        // return redirect()->route('bandas.index')->with('error', 'Acesso não autorizado.');
    }
}
