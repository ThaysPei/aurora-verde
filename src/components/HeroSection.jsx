import './HeroSection.css';
import heroImg from '../assets/hero-image.png';
import heroImg1 from '../assets/hero-image2.png';
import heroImg2 from '../assets/hero-image3.png';

function HeroSection() {
  return (
    <section className="hero-section" aria-label="Banner principal">
      <div className="hero-wrapper">
        <div className="hero-image-container">
          <a href="#" aria-label="Ver promoção de orgânicos">
            <img src={heroImg} alt="Promoção orgânicos" className="hero-image" />
          </a>
        </div>

        <div className="hero-image-container">
          <a href="#" aria-label="Ver segunda promoção">
            <img
              src={heroImg1}
              alt="Segunda promoção"
              className="hero-image-small"
            />
          </a>
        </div>

        <div className="hero-image-container">
          <a href="#" aria-label="Ver terceira promoção">
            <img
              src={heroImg2}
              alt="Terceira promoção"
              className="hero-image-small"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
