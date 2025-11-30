import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ProductGrid from './components/ProductGrid'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app">
      {/* Botón hamburguesa para móvil */}
      <button
        className="mobile-menu-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Overlay para cerrar sidebar en móvil */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category)
          setSidebarOpen(false) // Cerrar sidebar al seleccionar categoría en móvil
        }}
        isOpen={sidebarOpen}
      />
      <main className="main-content">
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
    </div>
  )
}

export default App
