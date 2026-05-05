import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import useCartStore from '../../store/useCartStore';
import useProductStore from '../../store/useProductStore';

const Header = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const setSearchQuery = useProductStore((state) => state.setSearchQuery);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm docked full-width top-0 z-50 sticky font-['Inter'] text-sm font-medium tracking-tight">
      <div className="flex items-center justify-between max-w-[1280px] mx-auto px-6 h-16 w-full">
        {/* Brand */}
        <Link to="/" className="text-xl font-black text-blue-600 dark:text-blue-400 tracking-tighter cursor-pointer">
          NexusShop
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 pb-1 active:scale-95 transition-transform">Home</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all duration-200 active:scale-95 px-2 py-1 rounded-md">Categories</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all duration-200 active:scale-95 px-2 py-1 rounded-md">Deals</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-all duration-200 active:scale-95 px-2 py-1 rounded-md">New Arrivals</Link>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
            <Search size={18} className="text-on-surface-variant mr-2" />
            <input 
              onChange={handleSearchChange}
              className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-48 placeholder:text-outline p-0" 
              placeholder="Search products..." 
              type="text"
            />
          </div>
          
          <Link to="/cart" className="text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 p-2 rounded-full active:scale-95 flex items-center justify-center relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-error text-on-error text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 p-2 rounded-full active:scale-95 flex items-center justify-center">
            <User size={24} />
          </Link>
          
          <button className="md:hidden text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
