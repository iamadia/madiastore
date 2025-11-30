import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './ProductGrid.css';

// Interfaz para los filtros
interface FilterState {
    priceRange: string;
    condition: string;
    storage: string;
    sortBy: string;
}

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
    category?: string;
}

// Props que recibe el componente
interface ProductGridProps {
    selectedCategory: string;
}

/**
 * Componente que muestra una cuadrícula de productos
 * Carga los datos desde el archivo products.json y filtra por categoría
 */
const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<FilterState>({
        priceRange: 'all',
        condition: 'all',
        storage: 'all',
        sortBy: 'default'
    });

    // Cargar productos al montar el componente
    useEffect(() => {
        fetch('/data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // Función para aplicar filtros y búsqueda
    const getFilteredProducts = () => {
        let filtered = products;

        // Filtrar por categoría
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Filtrar por búsqueda
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(term) ||
                product.color.toLowerCase().includes(term) ||
                product.storage.toLowerCase().includes(term)
            );
        }

        // Filtrar por rango de precio
        if (filters.priceRange !== 'all') {
            const [min, max] = filters.priceRange.split('-').map(Number);
            filtered = filtered.filter(product =>
                product.price >= min && product.price <= max
            );
        }

        // Filtrar por condición
        if (filters.condition !== 'all') {
            filtered = filtered.filter(product => product.condition === filters.condition);
        }

        // Filtrar por almacenamiento
        if (filters.storage !== 'all') {
            filtered = filtered.filter(product => product.storage.includes(filters.storage));
        }

        // Ordenar productos
        if (filters.sortBy !== 'default') {
            filtered = [...filtered].sort((a, b) => {
                switch (filters.sortBy) {
                    case 'price-asc':
                        return a.price - b.price;
                    case 'price-desc':
                        return b.price - a.price;
                    case 'name-asc':
                        return a.name.localeCompare(b.name);
                    case 'name-desc':
                        return b.name.localeCompare(a.name);
                    default:
                        return 0;
                }
            });
        }

        return filtered;
    };

    const filteredProducts = getFilteredProducts();

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="product-grid-container">
            <div className="product-grid-header">
                <h1>
                    {selectedCategory === 'all'
                        ? 'Todos los Productos'
                        : selectedCategory === 'Watch'
                            ? 'Apple Watch'
                            : selectedCategory}
                </h1>
                <p className="product-count">{filteredProducts.length} productos disponibles</p>
            </div>

            {/* Barra de búsqueda */}
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {/* Filtros y ordenamiento */}
            <Filters filters={filters} onFilterChange={setFilters} />

            {/* Grid de productos */}
            {filteredProducts.length > 0 ? (
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p className="no-results-icon">🔍</p>
                    <p className="no-results-text">No se encontraron productos</p>
                    <p className="no-results-hint">Intenta ajustar los filtros o la búsqueda</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
