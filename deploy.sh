#!/bin/bash
echo "Running composer"
composer install --no-dev --working-dir=/var/www

echo "Generating application key"
php artisan key:generate

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate:fresh

echo "Seeding database..."
php artisan db:seed
