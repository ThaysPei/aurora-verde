import { useCallback } from 'react';
import './CategoriesModal.css';
import { categories } from '../data/categories';

function CategoriesModal({ isOpen, onClose }) {
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Categorias Populares</h2>
          <button className="modal-close" onClick={onClose} aria-label="Fechar modal">
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="modal-grid">
          {categories.map((category) => (
            <div key={category.id} className="modal-category-card">
              <div className="modal-category-img">
                <img src={category.img} alt={category.title} />
                <div className="popularity-badge">{category.popularity}%</div>
              </div>

              <div className="modal-category-info">
                <h3>{category.title}</h3>
                <p className="category-description">{category.description}</p>

                <div className="category-stats">
                  <div className="stat-item">
                    <span className="stat-label">Popularidade:</span>
                    <div className="popularity-bar">
                      <div
                        className="popularity-fill"
                        style={{ width: `${category.popularity}%` }}
                      />
                    </div>
                  </div>

                  <div className="stat-item">
                    <span className="stat-label">Preferência:</span>
                    <span className={`preference-level ${category.preferenceLevel.toLowerCase()}`}>
                      {category.preferenceLevel}
                    </span>
                  </div>
                </div>

                <p className="category-reason">
                  <i className="fas fa-info-circle" />
                  {category.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesModal;
