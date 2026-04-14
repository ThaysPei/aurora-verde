import { createContext, useContext, useReducer } from 'react';

const FavoritesContext = createContext();

function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const isFavorite = state.some(
        (item) => item.id === action.payload.id,
      );

      if (isFavorite) {
        return state.filter((item) => item.id !== action.payload.id);
      }

      return [...state, action.payload];
    }

    case 'CLEAR_FAVORITES': {
      return [];
    }

    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const toggleFavorite = (productOrId) => {
    const id = typeof productOrId === 'object' ? productOrId.id : productOrId;
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { id } });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        clearFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      'useFavorites deve ser usado dentro de um FavoritesProvider',
    );
  }
  return context;
}
