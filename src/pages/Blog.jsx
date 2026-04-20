import Header from '../components/Header';
import Nav from '../components/Nav';

function Blog() {
  return (
    <>
      <Header />
      <Nav />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>Blog</h1>
        <p>Blog em desenvolvimento.</p>
      </main>
    </>
  );
}

export default Blog;
