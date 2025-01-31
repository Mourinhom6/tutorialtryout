<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\VerifyTokenTurnStileRequest;


class TurnstileController extends Controller
{
    public function verify(VerifyTokenTurnStileRequest $request)
    {
        return redirect('/success')->with('message', 'Form submitted successfully!');

    }
//     public function verify(Request $request)

//     {

//         $request->validate([
//             'cf-turnstile-response' => 'required|string',
//         ]);
//         $token = $request->input('cf-turnstile-response');

//         $response = Http::asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
//             'secret' => config('services.cloudflare.turnstile.secret_key'),
//             'response' => $token,
//             'remoteip' => $request->ip(),
//         ]);
//         $result = $response->json();
//         if (!$result['success']) {
//             return back()->withErrors(['cf-turnstile-response' => 'Invalid CAPTCHA. Please try again.']);
//         }
//         return redirect('/success')->with('message', 'Form submitted successfully!');
//     }
// }


//         $urrl="https://challenges.cloudflare.com/turnstile/v0/siteverify";
//         $response=Http::asForm()->post($urrl,["secret"=>env('CLOUDFLARE_TURNSTILE_SECRET_KEY'),"response"=>$tokeAPI, "remoteIP"=>$remoteIP]);
//         $responseresponse=$response->json();
//         if($responseresponse["success"] ?? false

//         // $formData = new FormData();
//         // $formData.append("secret", SECRET_KEY);
//         // $formData.append("response", token);
//         // $formData.append("remoteip", ip);


//         return inertia('TestpageTSX', ['posts' => $posts]);
//     }
}
