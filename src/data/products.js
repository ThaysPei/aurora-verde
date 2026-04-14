import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.png';
import img20 from '../assets/img20.png';
import img21 from '../assets/img21.png';
import img22 from '../assets/img22.png';

export const products = [
  { id: 1, title: 'Green Apple', img: img13, price: 12.0, category: 'frutas', popularity: 85 },
  { id: 2, title: 'Fresh Indian Malta', img: img14, price: 15.0, category: 'frutas', popularity: 78 },
  { id: 3, title: 'Green Lettuce', img: img15, price: 8.0, category: 'verduras', popularity: 92 },
  { id: 4, title: 'Eggplant', img: img16, price: 6.5, category: 'verduras', popularity: 65 },
  { id: 5, title: 'Big Potatoes', img: img17, price: 9.0, category: 'legumes', popularity: 88 },
  { id: 6, title: 'Corn', img: img18, price: 5.0, category: 'graos', popularity: 72 },
  { id: 7, title: 'Fresh Cauliflower', img: img19, price: 11.0, category: 'verduras', popularity: 60 },
  { id: 8, title: 'Green Capsicum', img: img20, price: 7.5, category: 'verduras', popularity: 70 },
  { id: 9, title: 'Green Chili', img: img21, price: 4.0, category: 'temperos', popularity: 55 },
  { id: 10, title: 'Green Lettuce', img: img22, price: 8.0, category: 'verduras', popularity: 92 },
];

export function searchProducts(term) {
  if (!term.trim()) return products;
  const lowerTerm = term.toLowerCase();
  return products.filter((p) =>
    p.title.toLowerCase().includes(lowerTerm) ||
    p.category.toLowerCase().includes(lowerTerm),
  );
}
