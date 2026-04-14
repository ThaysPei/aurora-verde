import { useState, useEffect, useCallback } from 'react';
import './Categories.css';
import { categories } from '../data/categories';
import CategoriesModal from './CategoriesModal';

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.img} alt={category.title} />
      <p>{category.title}</p>
    </div>
  );
}

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 6;

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = categories.length - visibleItems;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleItems]);

  return (
    <section className="categories-container" aria-label="Categorias Populares">
      <div className="categories-header">
        <h2
          className="categories-title-clickable"
          onClick={openModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              openModal();
            }
          }}
          aria-label="Ver todas as categorias populares"
        >
          Popular Categories
          <i className="fas fa-external-link-alt" />
        </h2>
        <a href="#" className="view-all">
          View All →
        </a>
      </div>

      <div className="categories-carousel-wrapper">
        <div
          className="categories-carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      <CategoriesModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Categories;
