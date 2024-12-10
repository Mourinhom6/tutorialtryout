<?php

// namespace App\Exceptions;

// public function render($request, Throwable $e)
// {
//     $response = parent::render($request, $e);

//     if (!app()->environment(['local', 'testing']) && in_array($response->status(), [500, 503, 404, 403])) {
//         return Inertia::render('Error', [
//                 'status' => $response->status(),
//                 'exception_name' => get_class($e), // Pass the error class name
//                 'exception_message' => $e->getMessage(), // Pass the error message
//             ])
//             ->toResponse($request)
//             ->setStatusCode($response->status());
//     }

//     return $response;
// }

