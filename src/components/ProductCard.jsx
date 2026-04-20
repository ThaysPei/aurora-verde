import './PopularProducts.css';
import { useCart } from '../contexts/CartContext';

function renderStars(rating) {
  const full = Math.floor(rating || 0);
  const frac = (rating || 0) - full;
  const half = frac >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(<i key={`f-${i}`} className="fas fa-star" />);
  }
  if (half) {
    // use half star if available, otherwise use a semi-transparent full star
    stars.push(<i key="half" className="fas fa-star-half-alt" />);
  }
  const total = full + (half ? 1 : 0);
  for (let i = total; i < 5; i++) {
    stars.push(<i key={`e-${i}`} className="far fa-star" />);
  }
  return stars;
}

function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart, isInCart }) {
  const rating = typeof product.rating === 'number' ? product.rating : 0;

  return (
    <article className="product-card">
      {product.outOfStock && <div className="out-of-stock-badge">Out of Stock</div>}

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

        <div className="product-price">
          {product.originalPrice !== null && (
            <span className="original-price">R$ {product.originalPrice.toFixed(2)}</span>
          )}
          <span className="current-price">R$ {product.price.toFixed(2)}</span>
        </div>

        <div className="rating" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {renderStars(rating)}
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

export default ProductCard;
