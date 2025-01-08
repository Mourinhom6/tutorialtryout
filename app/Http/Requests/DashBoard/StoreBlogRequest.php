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
            'img_main' => ['required', 'string'],
            'title' => ['required', 'string', 'max:255'],
            'importance' => ['required', 'integer', 'min:1', 'max:5'],
            'subtitle' => ['required', 'string', 'max:255'],
            'size' => ['required', 'integer', 'min:1', 'max:5'],
            'intro' => ['required', 'string'],
            'text1' => ['required', 'string'],
            'text2' => ['required', 'string'],
            'state' => ['required', Rule::in(['published', 'archived'])],
            'created_by' => ['required', 'exists:users,id'],
            'updated_by' => ['required', 'exists:users,id'],
            'date' => ['required', 'date'],
            'tags' => ['nullable', 'array'],
            'tags.*' => ['exists:tags,id'],
        ];
    }
}
