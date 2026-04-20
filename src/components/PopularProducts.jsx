import './PopularProducts.css';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

import ProductCard from './ProductCard';

function PopularProducts() {
  const { addItem, items } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const cartItemIds = items.map((item) => item.id);

  return (
    <section className="popular-container" aria-label="Produtos Populares">
      <div className="popular-header">
        <h2>Popular Products</h2>
        <a href="#" className="view-all">
          View All ÔåÆ
        </a>
      </div>

      <div className="popular-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={isFavorite(product.id)}
            onToggleFavorite={toggleFavorite}
            onAddToCart={addItem}
            isInCart={cartItemIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
