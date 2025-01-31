<?php

namespace App\Http\Requests\DashBoard;

use App\Models\Escala;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class ImportFileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = auth()->user();
        return $user && $user->tipo >= 4;
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'ficheiro' => ['required', 'file', 'mimes:csv,xlsx' ,'max:1200000'],
        ];
    }
}
