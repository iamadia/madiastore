import React from 'react';
import './Filters.css';

// Props del componente
interface FiltersProps {
    filters: {
        priceRange: string;
        condition: string;
        storage: string;
        sortBy: string;
    };
    onFilterChange: (filters: {
        priceRange: string;
        condition: string;
        storage: string;
        sortBy: string;
    }) => void;
}

/**
 * Componente de filtros y ordenamiento
 * Permite filtrar productos por precio, condición, almacenamiento y ordenar
 */
const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
    const [showFilters, setShowFilters] = React.useState(false);

    const handleChange = (key: 'priceRange' | 'condition' | 'storage' | 'sortBy', value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    // Contar filtros activos
    const activeFiltersCount = [
        filters.priceRange !== 'all',
        filters.condition !== 'all',
        filters.storage !== 'all',
        filters.sortBy !== 'default'
    ].filter(Boolean).length;

    return (
        <div className="filters">
            {/* Botón para mostrar/ocultar filtros */}
            <button
                className="toggle-filters-button"
                onClick={() => setShowFilters(!showFilters)}
            >
                {showFilters ? '▲ Ocultar filtros' : '▼ Mostrar filtros'}
                {activeFiltersCount > 0 && !showFilters && (
                    <span className="active-filters-badge">{activeFiltersCount}</span>
                )}
            </button>

            <div className={`filters-content ${showFilters ? 'show' : ''}`}>
                <div className="filters-grid">
                    {/* Filtro por precio */}
                    <div className="filter-group">
                        <label className="filter-label">Precio</label>
                        <select
                            className="filter-select"
                            value={filters.priceRange}
                            onChange={(e) => handleChange('priceRange', e.target.value)}
                        >
                            <option value="all">Todos</option>
                            <option value="0-400000">Hasta ₡400,000</option>
                            <option value="400000-600000">₡400,000 - ₡600,000</option>
                            <option value="600000-800000">₡600,000 - ₡800,000</option>
                            <option value="800000-999999999">Más de ₡800,000</option>
                        </select>
                    </div>

                    {/* Filtro por condición */}
                    <div className="filter-group">
                        <label className="filter-label">Condición</label>
                        <select
                            className="filter-select"
                            value={filters.condition}
                            onChange={(e) => handleChange('condition', e.target.value)}
                        >
                            <option value="all">Todos</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                        </select>
                    </div>

                    {/* Filtro por almacenamiento */}
                    <div className="filter-group">
                        <label className="filter-label">Almacenamiento</label>
                        <select
                            className="filter-select"
                            value={filters.storage}
                            onChange={(e) => handleChange('storage', e.target.value)}
                        >
                            <option value="all">Todos</option>
                            <option value="128GB">128GB</option>
                            <option value="256GB">256GB</option>
                            <option value="512GB">512GB</option>
                            <option value="1TB">1TB</option>
                        </select>
                    </div>

                    {/* Ordenamiento */}
                    <div className="filter-group">
                        <label className="filter-label">Ordenar por</label>
                        <select
                            className="filter-select"
                            value={filters.sortBy}
                            onChange={(e) => handleChange('sortBy', e.target.value)}
                        >
                            <option value="default">Predeterminado</option>
                            <option value="price-asc">Precio: Menor a Mayor</option>
                            <option value="price-desc">Precio: Mayor a Menor</option>
                            <option value="name-asc">Nombre: A-Z</option>
                            <option value="name-desc">Nombre: Z-A</option>
                        </select>
                    </div>
                </div>

                {/* Botón para limpiar filtros */}
                {(filters.priceRange !== 'all' ||
                    filters.condition !== 'all' ||
                    filters.storage !== 'all' ||
                    filters.sortBy !== 'default') && (
                        <button
                            className="clear-filters-button"
                            onClick={() => onFilterChange({
                                priceRange: 'all',
                                condition: 'all',
                                storage: 'all',
                                sortBy: 'default'
                            })}
                        >
                            Limpiar filtros
                        </button>
                    )}
            </div>
        </div>
    );
};

export default Filters;
