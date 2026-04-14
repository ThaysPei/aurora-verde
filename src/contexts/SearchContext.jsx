import { createContext, useContext, useState, useCallback } from 'react';
import { products, searchProducts } from '../data/products';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSearching, setIsSearching] = useState(false);

  const search = useCallback((term) => {
    setSearchTerm(term);
    setIsSearching(true);

    const results = searchProducts(term);
    setFilteredProducts(results);
    setIsSearching(false);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setFilteredProducts(products);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        filteredProducts,
        isSearching,
        search,
        clearSearch,
        allProducts: products,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch deve ser usado dentro de um SearchProvider');
  }
  return context;
}
