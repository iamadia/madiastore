import React from 'react';
import './SearchBar.css';

// Props del componente
interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

/**
 * Componente de barra de búsqueda
 * Permite buscar productos por nombre o modelo
 */
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <div className="search-input-container">
                <span className="search-icon">🔍</span>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar iPhone, Mac, iPad..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                {searchTerm && (
                    <button
                        className="clear-button"
                        onClick={() => onSearchChange('')}
                        aria-label="Limpiar búsqueda"
                    >
                        ✕
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
