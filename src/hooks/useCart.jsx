import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CartContext = createContext(null);
const STORAGE_KEY = 'pharmacy-cart';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem(STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (medicine, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === medicine.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }

      return [...currentItems, { ...medicine, quantity }];
    });

    toast.success(`${medicine.name} added to cart`);
  };

  const removeItem = (medicineId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== medicineId));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (medicineId, quantity) => {
    if (quantity <= 0) {
      removeItem(medicineId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === medicineId ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length ? 4.99 : 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        deliveryFee,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
