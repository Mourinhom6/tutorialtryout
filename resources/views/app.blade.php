<!DOCTYPE html>
<html lang="en">
{{-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark"> --}}

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>


    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    @routes
</head>
<body>
    @inertia
</body>
</html>
