import './HeroSection.css';
import bannerImg from '../assets/banner-img.jpg'; // substitua pela imagem certa

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <div className="hero-text">
          <h1>Fresh & Healthy <br /> Organic Food</h1>
          <p>Sale up to <span className="highlight">30% OFF</span><br />Free shipping on all your order.</p>
          <button className="btn-shop">Shop now</button>
        </div>
        <div className="hero-image">
          <img src={bannerImg} alt="Organic Basket" />
        </div>
      </div>

      <div className="hero-promos">
        <div className="promo-card">
          <h3>SUMMER SALE</h3>
          <p>75% OFF<br /><small>Only Fruit & Vegetable</small></p>
          <a href="#">Shop Now →</a>
        </div>
        <div className="promo-card dark">
          <h3>BEST DEAL</h3>
          <p>Special Products<br />Deal of the Month</p>
          <a href="#">Shop Now →</a>
        </div>
      </div>

      <div className="hero-benefits">
        <div className="benefit">
          <span>🚚</span>
          <p><strong>Free Shipping</strong><br />on all your order</p>
        </div>
        <div className="benefit">
          <span>💬</span>
          <p><strong>Support 24/7</strong><br />Instant access to help</p>
        </div>
        <div className="benefit">
          <span>🔒</span>
          <p><strong>Secure Payment</strong><br />100% protected</p>
        </div>
        <div className="benefit">
          <span>💸</span>
          <p><strong>Money-Back</strong><br />30 days guarantee</p>
        </div>
      </div>
    </section>
  );
}
