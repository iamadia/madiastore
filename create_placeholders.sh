#!/bin/bash

# Script para crear placeholders SVG para las imágenes de productos

# Crear directorio si no existe
mkdir -p public/images/products

# Función para crear un SVG placeholder
create_placeholder() {
    local filename=$1
    local title=$2
    local color=$3
    
    cat > "public/images/products/$filename" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect fill="$color" width="400" height="400"/>
  <text fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="bold" x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">$title</text>
</svg>
EOF
}

# iPhone placeholders
create_placeholder "iphone-15-green.png" "iPhone 15 Verde" "#e8f5e9"
create_placeholder "iphone-15-yellow.png" "iPhone 15 Amarillo" "#fff9c4"
create_placeholder "iphone-15-black.png" "iPhone 15 Negro" "#424242"
create_placeholder "iphone-15-pro-natural.png" "iPhone 15 Pro Natural" "#e0e0e0"
create_placeholder "iphone-15-pro-blue.png" "iPhone 15 Pro Azul" "#bbdefb"
create_placeholder "iphone-15-pro-white.png" "iPhone 15 Pro Blanco" "#fafafa"
create_placeholder "iphone-15-pro-black.png" "iPhone 15 Pro Negro" "#212121"
create_placeholder "iphone-15-pro-max-natural.png" "iPhone 15 Pro Max Natural" "#e0e0e0"
create_placeholder "iphone-15-pro-max-blue.png" "iPhone 15 Pro Max Azul" "#bbdefb"
create_placeholder "iphone-15-pro-max-white.png" "iPhone 15 Pro Max Blanco" "#fafafa"
create_placeholder "iphone-15-pro-max-black.png" "iPhone 15 Pro Max Negro" "#212121"
create_placeholder "iphone-16-ultramarine.png" "iPhone 16 Ultramarino" "#3f51b5"
create_placeholder "iphone-16-teal.png" "iPhone 16 Verde Azulado" "#26a69a"
create_placeholder "iphone-16-pink.png" "iPhone 16 Rosado" "#f8bbd0"
create_placeholder "iphone-16-white.png" "iPhone 16 Blanco" "#fafafa"
create_placeholder "iphone-16-black.png" "iPhone 16 Negro" "#212121"
create_placeholder "iphone-16-pro-natural.png" "iPhone 16 Pro Natural" "#e0e0e0"
create_placeholder "iphone-16-pro-desert.png" "iPhone 16 Pro Desierto" "#d7ccc8"
create_placeholder "iphone-16-pro-white.png" "iPhone 16 Pro Blanco" "#fafafa"
create_placeholder "iphone-16-pro-black.png" "iPhone 16 Pro Negro" "#212121"
create_placeholder "iphone-16-pro-max-natural.png" "iPhone 16 Pro Max Natural" "#e0e0e0"
create_placeholder "iphone-16-pro-max-desert.png" "iPhone 16 Pro Max Desierto" "#d7ccc8"
create_placeholder "iphone-16-pro-max-white.png" "iPhone 16 Pro Max Blanco" "#fafafa"
create_placeholder "iphone-16-pro-max-black.png" "iPhone 16 Pro Max Negro" "#212121"

# Mac placeholders
create_placeholder "macbook-air-m3-midnight.png" "MacBook Air M3" "#263238"
create_placeholder "macbook-pro-14-m4.png" "MacBook Pro 14\" M4" "#212121"
create_placeholder "imac-24-m4-blue.png" "iMac 24\" M4" "#42a5f5"

# iPad placeholders
create_placeholder "ipad-pro-13-m4.png" "iPad Pro 13\" M4" "#e0e0e0"
create_placeholder "ipad-air-11-m2.png" "iPad Air 11\" M2" "#ce93d8"
create_placeholder "ipad-10-blue.png" "iPad 10.9\"" "#64b5f6"

# Apple Watch placeholders
create_placeholder "apple-watch-s10-silver.png" "Apple Watch S10" "#e0e0e0"
create_placeholder "apple-watch-ultra-2.png" "Apple Watch Ultra 2" "#9e9e9e"
create_placeholder "apple-watch-se-midnight.png" "Apple Watch SE" "#263238"

# AirPods placeholders
create_placeholder "airpods-pro-2.png" "AirPods Pro 2" "#fafafa"
create_placeholder "airpods-max-midnight.png" "AirPods Max" "#263238"
create_placeholder "airpods-4-anc.png" "AirPods 4" "#fafafa"

echo "✅ Placeholders creados exitosamente"
