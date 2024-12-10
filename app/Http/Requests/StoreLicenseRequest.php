<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreLicenseRequest extends FormRequest
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
            "NOME" => [
                'required',
                Rule::in(['SEGURO_BUS', 'Inspeção Periódica', 'Inspeção Extraórdinária', 'Transporte Coletivo de Crianças', 'Transporte Público Passageiros', 'Transporte Rodoviário Internacional'])
            ],
            "TIPO" => [
                'required',
                Rule::in(['SEGURO', 'INSPEÇÃO', 'LICENSA'])
            ],
            "ATRIBUICAO" => [
                'required',
                Rule::in(['AEROPORTO PORTO', 'AML', 'AML (SINISTRADA)', 'ASSISTÊNCIA', 'AVARIADA', 'BLA BLA', 'CARMO', 'DUA(ATALAIA)-22FEV', 'DUA(ENCOSTA TOUR)', 'ENGª SÓNIA FERREIRA', 'FERREIRINHA', 'FERREIRINHA (DESLOCAR)', 'FERREIRINHA (REBOQUE)', 'FILIPE BELECE', 'FLIXBUS', 'FLIXBUS (AVARIADA)', 'INCÊNDIO (11JAN2024)', 'JOAQUIM ANTÓNIO', 'JORGE (UNIR)', 'JORGE (UNIR) - AVARIA', 'JORGE (UNIR/CIM-TS)', 'JOSÉ MANUEL', 'LAVARINHAS', 'MOTA', 'MOTA (METROBUS)', 'MOTA (UNIR)', 'NEX (AVAR/DCS/IPO)', 'NEX (AVARIADA)', 'NEX (AVARIADA/LR)', 'NEX (FORMAÇÃO)', 'NEX (SINISTRO)', 'NEX CONTINENTAL', 'OFICINA', 'PARA SUCATA', 'PAULO (MECÂNICO)', 'PEÇAS', 'PEDRO SILVA', 'RECURSOS HUMANOS', 'RIBEIRO', 'RUBEN (UNIR)', 'RUBEN (UNIR) - AVARIA', 'RUI AMORIM', 'SANDIM', 'SUCATEIRO (OLEIROS)', 'TURISMO', 'UNIR'])
            ],
            "EXTRA" => [
                'required',
                Rule::in(['GASÓLEO', 'GASOLINA/HIB', '07-ELETRICO', 'GNC', 'GASÓLEO/HIBRIDO', 'NULL'])
            ],
            "STATE" => [
                'required',
                Rule::in(['ACTIVO', 'DESATIVADO'])
            ],
            "NUM" => ['required', 'integrer'],
            'EXPIRE_DATE' => ['required', 'date'],
            'TIME_EXPANSE' => ['required', 'date'],
        ];
    }
}
