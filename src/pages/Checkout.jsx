import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, Plus } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import Button from '../Components/atoms/Button';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCartStore();
  const [isOrdered, setIsOrdered] = React.useState(false);

  const handlePlaceOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) return (
    <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
      <div className="bg-success-container w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <CheckCircle2 size={60} className="text-success" />
      </div>
      <h2 className="text-4xl font-bold text-on-surface mb-4">Order Confirmed!</h2>
      <p className="text-xl text-secondary mb-12">Thank you for your purchase. We've sent a confirmation email to your inbox.</p>
      <Link to="/">
        <Button className="mx-auto">Continue Shopping</Button>
      </Link>
    </div>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Checkout Preview</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Shipping & Payment Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Address Section */}
          <section className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Truck className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-on-surface">Shipping Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none" />
              <input type="text" placeholder="Last Name" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none" />
              <input type="email" placeholder="Email Address" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none md:col-span-2" />
              <input type="text" placeholder="Street Address" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none md:col-span-2" />
              <input type="text" placeholder="City" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none" />
              <input type="text" placeholder="Zip Code" className="p-3 rounded-lg border border-outline-variant focus:border-primary outline-none" />
            </div>
          </section>

          {/* Payment Section */}
          <section className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-on-surface">Payment Method</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded border border-outline-variant">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">•••• •••• •••• 4242</p>
                    <p className="text-sm text-secondary">Expires 12/26</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              </div>
              <button className="w-full p-4 rounded-xl border-2 border-outline-variant border-dashed text-secondary hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                <Plus size={20} /> Add New Payment Method
              </button>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm sticky top-24">
            <h2 className="text-2xl font-bold text-on-surface mb-6">Your Order</h2>
            
            <div className="max-h-60 overflow-y-auto mb-6 space-y-4 scrollbar-hide">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-surface-container-low rounded-lg p-2">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-on-surface line-clamp-1">{item.title}</p>
                    <p className="text-sm text-secondary">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-on-surface">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span className="text-success font-bold">FREE</span>
              </div>
              <div className="border-t border-outline-variant/30 pt-4 flex justify-between text-2xl font-bold text-on-surface">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <Button onClick={handlePlaceOrder} className="w-full py-6 text-xl">
              Place Order Now
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-secondary">
              <ShieldCheck size={18} className="text-success" />
              Secure Checkout Powered by Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
