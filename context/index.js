"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Cart store with persistence
export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      cartRefresh: false,
      setCartRefresh: () =>
        set((state) => ({ cartRefresh: !state.cartRefresh })),
      addItem: ({ item, quantity }) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (cartItem) => cartItem.item.id === item.id
          );

          if (existingItem) {
            // Update the quantity of the existing item
            return {
              cartItems: state.cartItems.map((cartItem) =>
                cartItem.item.id === item.id
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity + quantity,
                    }
                  : cartItem
              ),
            };
          } else {
            // Add the new item with the specified quantity
            return {
              cartItems: [...state.cartItems, { item, quantity }],
            };
          }
        }),
      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.item.id !== id
          ),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // Key in local storage
    }
  )
);

// Language store with persistence
export const useLanguageStore = create(
  persist(
    (set) => ({
      selectedLanguage: "English", // Default language
      setLanguage: (language) => set({ selectedLanguage: language }),
    }),
    {
      name: "language-storage", // Key in local storage
    }
  )
);

// User store with persistence
/* export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    {
      name: "user-storage", // Key in local storage
    }
  )
); */
