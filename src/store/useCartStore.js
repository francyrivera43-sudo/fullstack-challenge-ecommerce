import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const cart = get().cart;
        const index = cart.findIndex((item) => item.id === product.id);
        if (index > -1) {
          const newCart = [...cart];
          newCart[index].quantity += 1;
          set({ cart: newCart });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        const newCart = get().cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );
        set({ cart: newCart });
      },
      clearCart: () => set({ cart: [] }),
      getTotalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0),
      getTotalPrice: () => get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
