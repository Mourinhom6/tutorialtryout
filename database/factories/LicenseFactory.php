<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\License>
 */
class LicenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $expireDate = fake()->dateTimeBetween('now', '+10 month');
        return [
            'NUM' =>  fake()->randomNumber,
            'NOME' => fake()->randomElement(['SEGURO_BUS', 'Inspeção Periódica', 'Inspeção Extraórdinária']),
            'TIPO' => fake()->randomElement(['SEGURO', 'INSPEÇÃO', 'LICENSA']),
            'ATRIBUICAO' => fake()->randomElement(['AEROPORTO PORTO', 'AML', 'ASSISTÊNCIA']),
            'EXPIRE_DATE' => $expireDate,
            'EXTRA' => fake()->randomElement(['GASÓLEO', 'GASOLINA/HIB', 'NULL']),
            'TIME_EXPANSE' => fake()->dateTimeBetween($expireDate, $expireDate->modify('+3 months')),
            'STATE' => fake()->randomElement(['ACTIVO', 'DESATIVADO']),
        ];


    }
}
