import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{
        favorites,
        cart,
        addFavorite,
        removeFavorite,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};