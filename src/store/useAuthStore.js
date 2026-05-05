import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
      isAuthenticated: () => !!get().user,
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
