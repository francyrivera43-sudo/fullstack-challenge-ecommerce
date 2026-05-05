import React, { useEffect } from 'react';
import { ArrowRight, Search, Tune } from 'lucide-react';
import useProductStore from '../store/useProductStore';
import ProductCard from '../Components/molecules/ProductCard';
import Button from '../Components/atoms/Button';

const Home = () => {
  const { filteredProducts, loading, fetchProducts, categories, selectedCategory, setCategory, setSearchQuery } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="relative rounded-[24px] overflow-hidden bg-inverse-surface text-inverse-on-surface mb-12 min-h-[480px] flex items-center">
        <img 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2070" 
        />
        <div className="relative z-10 p-12 md:p-16 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-primary/20 text-inverse-primary rounded-full font-label-sm uppercase tracking-wider mb-6 backdrop-blur-sm border border-primary/30">
            Spring Collection 2024
          </span>
          <h1 className="font-h1 text-h1 text-white mb-4">Elevate Your Everyday Style.</h1>
          <p className="font-body-lg text-body-lg text-secondary-fixed mb-8 max-w-lg">
            Discover our curated selection of premium apparel, cutting-edge electronics, and timeless accessories designed for the modern lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>
              Shop Now <ArrowRight size={20} />
            </Button>
            <Button variant="outline">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-outline-variant/30">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`${
                selectedCategory === cat 
                  ? 'bg-primary-container text-on-primary-container shadow-sm' 
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/50'
              } px-4 py-2 rounded-full font-label-md whitespace-nowrap transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
              placeholder="Search catalog..." 
              type="text"
            />
          </div>
          <button className="bg-surface-container-low text-on-surface-variant p-2 rounded-lg border border-outline-variant/50 hover:bg-surface-container-high transition-colors flex items-center justify-center">
            <Tune size={24} />
          </button>
        </div>
      </div>

      {/* Product Gallery Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination (Simplified) */}
      {!loading && filteredProducts.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8 border-t border-outline-variant/30 pt-8">
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-md flex items-center justify-center transition-colors">2</button>
            <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-md flex items-center justify-center transition-colors">3</button>
            <span className="text-on-surface-variant px-2">...</span>
            <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-md flex items-center justify-center transition-colors">8</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
