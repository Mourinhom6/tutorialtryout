<?php

namespace App\Http\Requests\DashBoard;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOpeningRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'location' => ['required', 'string', 'max:255'],
            'type' => ['required', 'string', 'max:50'],
            'subsentence' => ['nullable', 'string', 'max:255'],
            'who_we_are' => ['required', 'string'],
            'what_were_looking' => ['required', 'string'],
            'why_to_apply' => ['nullable', 'string'],
            'surroundings' => ['nullable', 'string'],
            'state' => ['required', Rule::in(['published', 'archived'])],
            'created_by' => ['required', 'exists:users,id'],
            'updated_by' => ['required', 'exists:users,id'],
            'props' => ['nullable', 'array'],
            'props.*' => ['exists:props,id'],
        ];
    }
}
