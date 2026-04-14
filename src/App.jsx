import Header from './components/Header';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Benefits from './components/BeneSelection';
import Categories from './components/Categories';
import PopularProducts from './components/PopularProducts';
import Sale from './components/Sale';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <Benefits />
      <Categories />
      <PopularProducts />
      <Sale />
      <CartDrawer />
    </>
  );
}

export default App;
