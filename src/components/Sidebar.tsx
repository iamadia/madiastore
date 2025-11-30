import React from 'react';
import './Sidebar.css';

// Interfaz para las props del Sidebar
interface SidebarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    isOpen: boolean;
}

// Categorías disponibles con sus íconos
const categories = [
    { id: 'all', name: 'Todos los Productos', icon: '📦' },
    { id: 'iPhone', name: 'iPhone', icon: '📱' },
    { id: 'Mac', name: 'Mac', icon: '💻' },
    { id: 'iPad', name: 'iPad', icon: '📲' },
    { id: 'Watch', name: 'Apple Watch', icon: '⌚' },
    { id: 'AirPods', name: 'AirPods', icon: '🎧' },
];

/**
 * Componente Sidebar que muestra el menú de categorías
 * Permite filtrar productos por categoría
 */
const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategoryChange, isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Categorías</h2>
            </div>

            <nav className="sidebar-nav">
                <ul className="category-list">
                    {categories.map(category => (
                        <li key={category.id}>
                            <button
                                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => onCategoryChange(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
