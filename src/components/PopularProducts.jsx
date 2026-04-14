import './PopularProducts.css';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.png';
import img20 from '../assets/img20.png';
import img21 from '../assets/img21.png';
import img22 from '../assets/img22.png';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const products = [
  { id: 1, title: 'Green Apple', img: img13, price: 12.0 },
  { id: 2, title: 'Fresh Indian Malta', img: img14, price: 15.0 },
  { id: 3, title: 'Green Lettuce', img: img15, price: 8.0 },
  { id: 4, title: 'Eggplant', img: img16, price: 6.5 },
  { id: 5, title: 'Big Potatoes', img: img17, price: 9.0 },
  { id: 6, title: 'Corn', img: img18, price: 5.0 },
  { id: 7, title: 'Fresh Cauliflower', img: img19, price: 11.0 },
  { id: 8, title: 'Green Capsicum', img: img20, price: 7.5 },
  { id: 9, title: 'Green Chili', img: img21, price: 4.0 },
  { id: 10, title: 'Green Lettuce', img: img22, price: 8.0 },
];

function ProductCard({ product, isFavorite, onToggleFavorite, onAddToCart }) {
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

      <button
        className="add-to-cart"
        onClick={() => onAddToCart(product)}
        aria-label={`Adicionar ${product.title} ao carrinho`}
      >
        <i className="fas fa-shopping-bag" />
      </button>
    </article>
  );
}

function PopularProducts() {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

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
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
