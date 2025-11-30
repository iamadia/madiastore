import React from 'react';
import './ProductCard.css';

// Interfaz que define la estructura de un producto
interface Product {
  id: string;
  name: string;
  color: string;
  storage: string;
  condition: string;
  price: number;
  image: string;
  description: string;
}

// Props que recibe el componente ProductCard
interface ProductCardProps {
  product: Product;
}

/**
 * Componente que muestra una tarjeta de producto individual
 * con estilo inspirado en Apple Store
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Formatear precio en colones costarricenses
  const formatPrice = (price: number) => {
    return `₡${price.toLocaleString('es-CR')}`;
  };

  return (
    <div className="product-card">
      {product.condition === 'Usado' && (
        <div className="used-badge">Usado</div>
      )}

      <div className="product-image-container">
        <img
          src={`${import.meta.env.BASE_URL}${product.image}`}
          alt={`${product.name} ${product.color}`}
          className="product-image"
          onError={(e) => {
            // Placeholder en caso de que la imagen no cargue
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f5f5f7" width="300" height="300"/%3E%3Ctext fill="%23666" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-color">{product.color}</p>
        <p className="product-specs">
          {product.storage} • {product.condition}
        </p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
