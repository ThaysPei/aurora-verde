import Header from '../components/Header';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import Benefits from '../components/BeneSelection';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Sale from '../components/Sale';
import ImageBanner from '../components/ImageBanner';
import Testimonials from '../components/Testimonials';
import Sponsors from '../components/Sponsors';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <Benefits />
      <Categories />
      <PopularProducts />
      <Sale />
      <ImageBanner />
      <Testimonials />
      <Sponsors />
      <CartDrawer />
      <Footer />
    </>
  );
}

export default Home;
