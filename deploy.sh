#!/bin/bash
# echo "Running composer"
# composer install --no-dev --working-dir=/var/www

echo "Generating application key"
php artisan key:generate

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

# echo "Running migrations and Seeding database..."
# php artisan migrate:fresh --seed
 echo "Seeding demo data..."
    php artisan db:seed --force

# echo "Installing Node.js dependencies..."
# npm install --production

# # Build frontend assets
# echo "Building frontend assets..."
# npm run build -- --mode production
