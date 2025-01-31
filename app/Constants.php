<?php

namespace App;

class Constants
{

    // const NIGHT_SHIFT_START = '21:00:00';
    // const NIGHT_SHIFT_END = '06:00:00';

    const NIGHT_SHIFT_START = [
        'old_v1' => '20:00:00',
        'new_v2' => '20:30:00',
    ];

    const NIGHT_SHIFT_END = [
        'old_v1' => '06:30:00',
        'new_v2' => '07:00:00',
    ];

    // const TAX_RATE = 0.15;
    // const MAX_ATTEMPTS = 3;
    // const STATUS_ACTIVE = 1;
    // const STATUS_INACTIVE = 0;


    // public static $VALID_ROLES = [
    //     'admin' => 1,
    //     'driver' => 2,
    //     'manager' => 3,
    // ];
}
