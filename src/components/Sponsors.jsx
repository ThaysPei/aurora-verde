import './Sponsors.css';

const sponsors = [
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Adidas' },
  { id: 3, name: 'Puma' },
  { id: 4, name: 'Reebok' },
  { id: 5, name: 'New Balance' },
  { id: 6, name: 'Under Armour' },
];

function Sponsors() {
  return (
    <section className="sponsors" aria-label="Marcas patrocinadoras">
      <div className="sponsors-container">
        <div className="sponsors-content">
          <div className="sponsors-brands">
            <h3>Our Sponsors</h3>
            <div className="sponsors-logos">
              {sponsors.map((sponsor) => (
                <div key={sponsor.id} className="sponsor-logo">
                  <span>{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sponsors-newsletter">
            <div className="follow-instagram">
              <i className="fab fa-instagram"></i>
              <span>Follow us on Instagram</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-handle">
                @auroraverde
              </a>
            </div>

            <div className="newsletter-form">
              <h4>Subscribe Our Newsletter</h4>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email para newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
