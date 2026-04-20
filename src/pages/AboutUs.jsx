import Header from '../components/Header';
import Nav from '../components/Nav';

function AboutUs() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>About Us</h1>
        <p>Sobre n├│s em desenvolvimento.</p>
      </main>
    </>
  );
}

export default AboutUs;
