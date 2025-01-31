<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class VerifyTokenTurnStileRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'cf-turnstile-response' => 'required|string',
        ];
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $token = $this->input('cf-turnstile-response');

            $response = Http::asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                'secret' => config('services.cloudflare.turnstile.secret_key'),
                'response' => $token,
                'remoteip' => $this->ip(),
            ]);

            $result = $response->json();

            if (!$result['success']) {
                $validator->errors()->add('cf-turnstile-response', 'Invalid CAPTCHA. Please try again.');
            }
        });
    }
}
