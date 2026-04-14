import { useCallback } from 'react';
import './CartDrawer.css';
import { useCart } from '../contexts/CartContext';

function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItemCompletely, updateQuantity, totalPrice, clearCart } = useCart();

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        closeCart();
      }
    },
    [closeCart],
  );

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItemCompletely(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrinho</h2>
          <button className="close-btn" onClick={closeCart} aria-label="Fechar carrinho">
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-bag" />
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} />
                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
                  <div className="cart-item-controls">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      aria-label="Diminuir quantidade"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      aria-label="Aumentar quantidade"
                    >
                      +
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeItemCompletely(item.id)}
                      aria-label="Remover item"
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <strong>R$ {totalPrice.toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">Finalizar Compra</button>
            <button className="clear-cart-btn" onClick={clearCart}>
              Limpar Carrinho
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;
