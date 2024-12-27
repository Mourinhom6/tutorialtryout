<?php

namespace App\Http\Requests\DashBoard;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "img" => ['nullable', 'image'],
            "tag" => ['required', 'string'],
            //Add rule for the tag after project finish
            "title" => ['required', 'max:255'],
            "description" => ['nullable', 'string'],
            "state" => ['required', Rule::in(['Visiable', 'Hidden'])],
            "authors_name" => ['nullable', 'max:255'],
            "date" => ['nullable', 'date'],
            
        ];
    }
}
