import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import './Shop.css';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const ALL_CATS = ['All', 'Fruits', 'Vegetables', 'Legumes', 'Grains', 'Seasonings'];
const TAGS = ['healthy', 'low-fat', 'vegetarian', 'organic', 'kids'];

function Shop() {
  const { addItem, items } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const cartItemIds = items.map((i) => i.id);

  const prices = products.map((p) => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [ratingThreshold, setRatingThreshold] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('latest');

  const toggleCategory = (cat) => {
    if (cat === 'All') return setSelectedCategories(['All']);
    setSelectedCategories((prev) => {
      const next = prev.includes('All') ? [] : [...prev];
      if (next.includes(cat)) return next.filter((c) => c !== cat);
      return [...next, cat];
    });
  };

  const handleMinPrice = (val) => {
    setPriceRange(([_, max]) => [Math.min(Number(val), max), max]);
  };
  const handleMaxPrice = (val) => {
    setPriceRange(([min, _]) => [min, Math.max(Number(val), min)]);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setSelectedCategories(['all']);
    setPriceRange([minPrice, maxPrice]);
    setRatingThreshold(0);
    setSelectedTags([]);
    setSortBy('latest');
  };

  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    ALL_CATS.slice(1).forEach((c) => (counts[c] = products.filter((p) => p.category === c).length));
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        // category
        if (!selectedCategories.includes('all') && selectedCategories.length > 0) {
          if (!selectedCategories.includes(p.category)) return false;
        }
        // price
        if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
        // rating
        if (ratingThreshold > 0 && (typeof p.rating === 'number' ? p.rating : 0) < ratingThreshold) return false;
        // tags: ensure product has ALL selected tags
        if (selectedTags.length > 0) {
          const hasAll = selectedTags.every((t) => Array.isArray(p.tags) && p.tags.includes(t));
          if (!hasAll) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
        return 0; // latest - preserve original order
      });
  }, [selectedCategories, priceRange, ratingThreshold, selectedTags, sortBy]);

  return (
    <>
      <Header />
      <Nav />

      <main className="shop-container">
        <section className="shop-layout">
          <aside className="shop-sidebar" aria-label="Filters">
            <div className="filters">
              <h3>Categories</h3>
              <ul className="category-list">
                {ALL_CATS.map((cat) => (
                  <li key={cat}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                      />
                      <span className="cap">{cat}</span>
                      <span className="count">({categoryCounts[cat] || 0})</span>
                    </label>
                  </li>
                ))}
              </ul>

              <h3>Price</h3>
              <div className="price-range">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => handleMinPrice(e.target.value)}
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handleMaxPrice(e.target.value)}
                />
                <div className="price-label">Price: R${priceRange[0]} — R${priceRange[1]}</div>
              </div>

              <h3>Rating</h3>
              <div className="rating-group">
                {[4, 3, 2, 1].map((r) => (
                  <label key={r}>
                    <input
                      type="radio"
                      name="rating"
                      checked={ratingThreshold === r}
                      onChange={() => setRatingThreshold(r)}
                    />
                    <span>{r}.0 & up</span>
                  </label>
                ))}
                <label>
                  <input type="radio" name="rating" checked={ratingThreshold === 0} onChange={() => setRatingThreshold(0)} />
                  <span>Any</span>
                </label>
              </div>

              <h3>Popular Tags</h3>
              <div className="tags">
                {TAGS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`tag-btn ${selectedTags.includes(t) ? 'active' : ''}`}
                    onClick={() => toggleTag(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button className="clear-btn" onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </aside>

          <section className="shop-main">
            <div className="results-header">
              <div className="results-count">{filtered.length} Results Found</div>
              <div className="sort">
                <label>
                  Sort:
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="latest">Latest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={isFavorite(product.id)}
                  onToggleFavorite={toggleFavorite}
                  onAddToCart={addItem}
                  isInCart={cartItemIds.includes(product.id)}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Shop;
