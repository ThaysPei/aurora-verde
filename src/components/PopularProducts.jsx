import './PopularProducts.css';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart, isInCart }) {
  return (
    <article className="product-card">
      <div className="card-icons">
        <button
          className={`icon-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(product)}
          aria-label={
            isFavorite
              ? `Remover ${product.title} dos favoritos`
              : `Adicionar ${product.title} aos favoritos`
          }
        >
          <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'} />
        </button>
        <button className="icon-btn" aria-label="Visualizar produto">
          <i className="far fa-eye" />
        </button>
      </div>

      <img src={product.img} alt={product.title} />

      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <div className="rating" aria-label="Avaliação: 3 de 5 estrelas">
          ★★★☆☆
        </div>
      </div>

      {isInCart ? (
        <CartControls productId={product.id} />
      ) : (
        <button
          className="add-to-cart"
          onClick={() => onAddToCart(product)}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          <i className="fas fa-shopping-bag" />
        </button>
      )}
    </article>
  );
}

function CartControls({ productId }) {
  const { items, updateQuantity, removeItemCompletely } = useCart();
  const item = items.find((i) => i.id === productId);
  const quantity = item ? item.quantity : 0;

  const handleDecrease = () => {
    if (quantity <= 1) {
      removeItemCompletely(productId);
    } else {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(productId, quantity + 1);
  };

  return (
    <div className="quantity-controls">
      <button
        className="quantity-btn"
        onClick={handleDecrease}
        aria-label="Diminuir quantidade"
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        className="quantity-btn"
        onClick={handleIncrease}
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
}

function PopularProducts() {
  const { addItem, items } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const cartItemIds = items.map((item) => item.id);

  return (
    <section className="popular-container" aria-label="Produtos Populares">
      <div className="popular-header">
        <h2>Popular Products</h2>
        <a href="#" className="view-all">
          View All →
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
