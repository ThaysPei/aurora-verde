import './ImageBanner.css';
import imageBanner from '../assets/ImageBanner.png';

function ImageBanner() {
  return (
    <section className="image-banner">
      <img src={imageBanner} alt="Banner promocional" />
    </section>
  );
}

export default ImageBanner;
