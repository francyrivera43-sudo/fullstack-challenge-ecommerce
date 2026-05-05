import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Star, ChevronLeft, Heart, Share2 } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import Button from '../Components/atoms/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  );

  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8">
      <Link to="/" className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors">
        <ChevronLeft size={20} /> Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="bg-white rounded-3xl p-8 flex items-center justify-center border border-outline-variant/30 shadow-sm">
          <img src={product.image} alt={product.title} className="max-h-[500px] object-contain" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="text-primary font-label-md uppercase tracking-wider mb-2">{product.category}</span>
          <h1 className="text-4xl font-bold text-on-surface mb-4 leading-tight">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex text-[#fbbf24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < Math.floor(product.rating.rate) ? 'currentColor' : 'none'} />
              ))}
            </div>
            <span className="text-outline font-body-md">({product.rating.count} reviews)</span>
          </div>

          <p className="text-3xl font-bold text-on-surface mb-8">${product.price}</p>
          
          <p className="text-secondary leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-auto">
            <Button onClick={() => addToCart(product)} className="flex-grow md:flex-grow-0 min-w-[200px]">
              Add to Cart <ShoppingCart size={20} />
            </Button>
            <button className="p-4 rounded-lg border-2 border-outline-variant text-outline hover:bg-surface-container-low transition-colors">
              <Heart size={24} />
            </button>
            <button className="p-4 rounded-lg border-2 border-outline-variant text-outline hover:bg-surface-container-low transition-colors">
              <Share2 size={24} />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <p className="font-semibold text-on-surface mb-1">Free Shipping</p>
              <p className="text-sm text-secondary">On orders over $100</p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <p className="font-semibold text-on-surface mb-1">Secure Payment</p>
              <p className="text-sm text-secondary">100% encryption</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
