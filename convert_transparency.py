from PIL import Image
import os

# Directorio de imágenes
img_dir = 'public/images/products'

# Imágenes a convertir
images_to_convert = [
    'iphone-15-pink.png',
    'iphone-15-pro-max-natural.png'
]

for img_name in images_to_convert:
    img_path = os.path.join(img_dir, img_name)
    
    # Abrir imagen
    img = Image.open(img_path)
    
    # Crear una nueva imagen con fondo blanco
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        # Crear fondo blanco
        background = Image.new('RGB', img.size, (255, 255, 255))
        
        # Pegar la imagen sobre el fondo blanco
        if img.mode == 'P':
            img = img.convert('RGBA')
        
        background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
        
        # Guardar
        background.save(img_path, 'PNG')
        print(f'✅ Convertido: {img_name}')
    else:
        print(f'⚠️  No necesita conversión: {img_name}')

print('\n✅ Proceso completado')
