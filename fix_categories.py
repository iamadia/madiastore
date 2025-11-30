import json

# Leer el archivo JSON
with open('public/data/products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Agregar categoría a productos que no la tienen
for product in products:
    if 'category' not in product:
        # Determinar la categoría basándose en el nombre del producto
        if 'iPhone' in product['name']:
            product['category'] = 'iPhone'

# Guardar el archivo actualizado
with open('public/data/products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, indent=2, ensure_ascii=False)

print("✅ Categorías agregadas exitosamente")
