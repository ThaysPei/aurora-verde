import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Aurora Verde</h3>
          <p>Sua loja de produtos naturais e sustent├íveis.</p>
        </div>

        <div className="footer-section">
          <h4>Links R├ípidos</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p><i className="fas fa-phone"></i> (219) 555-0114</p>
          <p><i className="fas fa-envelope"></i> contato@auroraverde.com</p>
        </div>

        <div className="footer-section">
          <h4>Siga-nos</h4>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aurora Verde. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
