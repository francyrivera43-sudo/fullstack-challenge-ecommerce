import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  categories: [],
  selectedCategory: 'All Products',
  searchQuery: '',

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;
      const categories = ['All Products', ...new Set(products.map((p) => p.category))];
      set({ products, filteredProducts: products, categories, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  setCategory: (category) => {
    set({ selectedCategory: category });
    get().applyFilters();
  },

  applyFilters: () => {
    const { products, searchQuery, selectedCategory } = get();
    let filtered = products;

    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    set({ filteredProducts: filtered });
  },
}));

export default useProductStore;
