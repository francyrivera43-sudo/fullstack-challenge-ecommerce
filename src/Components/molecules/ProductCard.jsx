import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import Badge from '../atoms/Badge';
import useCartStore from '../../store/useCartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <article className="group bg-surface-container-lowest rounded-[16px] border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden p-6 flex items-center justify-center">
        {product.id % 5 === 0 && <Badge variant="bestSeller" className="absolute top-3 left-3">Best Seller</Badge>}
        {product.price > 100 && <Badge variant="discount" className="absolute top-3 left-3">-15%</Badge>}
        
        <button className="absolute top-3 right-3 text-outline hover:text-error transition-colors z-10 bg-white/80 backdrop-blur rounded-full p-1.5 flex items-center justify-center shadow-sm">
          <Heart size={20} />
        </button>
        
        <Link to={`/product/${product.id}`} className="w-full h-full">
          <img 
            alt={product.title} 
            className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
            src={product.image} 
          />
        </Link>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="font-label-sm text-label-sm text-secondary mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-h3 text-[1.125rem] font-semibold text-on-surface leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-[#fbbf24]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill={i < Math.floor(product.rating.rate) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="font-label-sm text-label-sm text-outline">({product.rating.count})</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="font-h3 text-h3 text-on-surface font-bold">${product.price}</p>
          </div>
          <button 
            onClick={() => addToCart(product)}
            className="bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors p-2.5 rounded-lg flex items-center justify-center shadow-sm active:scale-95"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
