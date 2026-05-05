import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import Button from '../Components/atoms/Button';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();

  if (cart.length === 0) return (
    <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
      <div className="bg-surface-container-low w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBag size={40} className="text-outline" />
      </div>
      <h2 className="text-2xl font-bold text-on-surface mb-4">Your cart is empty</h2>
      <p className="text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
      <Link to="/">
        <Button className="mx-auto">Start Shopping</Button>
      </Link>
    </div>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl border border-outline-variant/30 shadow-sm">
              <div className="w-32 h-32 flex-shrink-0 bg-surface-container-low rounded-xl p-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-grow">
                <p className="text-primary text-sm font-medium mb-1">{item.category}</p>
                <h3 className="text-xl font-semibold text-on-surface mb-2 leading-tight">{item.title}</h3>
                <p className="text-2xl font-bold text-on-surface mb-4">${item.price}</p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-surface-container-low rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded-md transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded-md transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-error hover:bg-error/10 p-2 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm sticky top-24">
            <h2 className="text-2xl font-bold text-on-surface mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-outline-variant/30 pt-4 flex justify-between text-xl font-bold text-on-surface">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <Link to="/checkout">
              <Button className="w-full">
                Proceed to Checkout <ArrowRight size={20} />
              </Button>
            </Link>

            <div className="mt-6 flex items-center justify-center gap-4">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
