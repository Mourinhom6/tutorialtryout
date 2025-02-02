# FROM php:8.3-fpm
FROM php:8.3-apache



# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpq-dev \
    zlib1g-dev \
    zip \
    unzip


# Install Node.js (LTS version)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*


# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

RUN a2enmod rewrite
ENV APACHE_DOCUMENT_ROOT /var/www/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf


# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

COPY . .

RUN composer install --no-dev --optimize-autoloader

# RUN npm install --legacy-peer-deps --production && npm run build -- --mode production
# RUN npm install --legacy-peer-deps && \
#     npm run build -- --mode production

RUN npm install --legacy-peer-deps && \
npm run build -- --mode production



# Fix permissions
RUN chown -R www-data:www-data /var/www \
    && chmod +x deploy.sh

EXPOSE 80
CMD ["apache2-foreground"]



# RUN mv public/build public/js public/css /var/www/public/

# Copy existing application directory contents
# COPY . /var/www


# After COPY . /var/www
# RUN chmod +x /var/www/deploy.sh

# Install dependencies
# RUN composer install

# Expose port 80
# EXPOSE 80

# Start Apache
# CMD ["apache2-foreground"]


# Change ownership of our applications
# RUN chown -R www-data:www-data /var/www

# # Expose port 9000 and start php-fpm server
# EXPOSE 9000
# CMD ["php-fpm"]
