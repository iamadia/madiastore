import urllib.request
import os

# Crear directorio si no existe
os.makedirs('public/images/products', exist_ok=True)

# URLs de imágenes de ejemplo (estas son URLs genéricas, necesitarás reemplazarlas con URLs reales)
# Por ahora, voy a crear un mensaje para el usuario
print("=" * 60)
print("INSTRUCCIONES PARA DESCARGAR IMÁGENES DE IPHONES")
print("=" * 60)
print()
print("Para completar el catálogo con imágenes reales, visita estos sitios:")
print()
print("1. CityPNG: https://www.citypng.com")
print("   - Busca: 'iPhone 15 pink', 'iPhone 16 pro', etc.")
print("   - Descarga las imágenes PNG con fondo transparente")
print()
print("2. TopPNG: https://toppng.com")
print("   - Busca modelos específicos de iPhone")
print("   - Descarga imágenes de alta resolución")
print()
print("3. FreePik: https://www.freepik.com")
print("   - Busca: 'iPhone mockup PNG'")
print("   - Filtra por 'Free' y 'PNG'")
print()
print("Guarda las imágenes en: public/images/products/")
print()
print("Nombres de archivo necesarios:")
print("-" * 60)

# Lista de imágenes necesarias para iPhones
iphone_images = [
    "iphone-15-pink.png",
    "iphone-15-blue.png", 
    "iphone-15-green.png",
    "iphone-15-yellow.png",
    "iphone-15-black.png",
    "iphone-15-pro-natural.png",
    "iphone-15-pro-blue.png",
    "iphone-15-pro-white.png",
    "iphone-15-pro-black.png",
    "iphone-15-pro-max-natural.png",
    "iphone-15-pro-max-blue.png",
    "iphone-15-pro-max-white.png",
    "iphone-15-pro-max-black.png",
    "iphone-16-ultramarine.png",
    "iphone-16-teal.png",
    "iphone-16-pink.png",
    "iphone-16-white.png",
    "iphone-16-black.png",
    "iphone-16-pro-natural.png",
    "iphone-16-pro-desert.png",
    "iphone-16-pro-white.png",
    "iphone-16-pro-black.png",
    "iphone-16-pro-max-natural.png",
    "iphone-16-pro-max-desert.png",
    "iphone-16-pro-max-white.png",
    "iphone-16-pro-max-black.png",
]

for img in iphone_images:
    print(f"  • {img}")

print()
print("=" * 60)
print("Tip: Busca imágenes con fondo transparente (PNG) para mejor")
print("     apariencia en el catálogo.")
print("=" * 60)
