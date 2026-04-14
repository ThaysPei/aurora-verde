import './Categories.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';

const categories = [
  { id: 1, title: 'Fresh fruit', img: img1 },
  { id: 2, title: 'Fresh Vegetables', img: img2 },
  { id: 3, title: 'Meat & Fish', img: img3 },
  { id: 4, title: 'Snacks', img: img4 },
  { id: 5, title: 'Beverages', img: img5 },
  { id: 6, title: 'Beauty & Health', img: img6 },
  { id: 7, title: 'Bread & Bakery', img: img7 },
  { id: 8, title: 'Baking Needs', img: img8 },
  { id: 9, title: 'Cooking', img: img9 },
  { id: 10, title: 'Diabetic Food', img: img10 },
  { id: 11, title: 'Dish Detergents', img: img11 },
  { id: 12, title: 'Oil', img: img12 },
];

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.img} alt={category.title} />
      <p>{category.title}</p>
    </div>
  );
}

function Categories() {
  return (
    <section className="categories-container" aria-label="Categorias Populares">
      <div className="categories-header">
        <h2>Popular Categories</h2>
        <a href="#" className="view-all">
          View All →
        </a>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
