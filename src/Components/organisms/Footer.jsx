import React from 'react';
import { Mail, Headset } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black font-['Inter'] text-sm antialiased w-full border-t border-slate-800 py-12 mt-16">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-white mb-2">NexusShop</div>
          <p className="text-slate-400 leading-relaxed">© 2024 NexusShop. Precision Engineering for Modern Commerce.</p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200 cursor-pointer" href="#">About Us</a>
          <a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200 cursor-pointer" href="#">Customer Support</a>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200 cursor-pointer" href="#">Privacy Policy</a>
          <a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200 cursor-pointer" href="#">Terms of Service</a>
        </div>

        {/* Links Column 3 */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2">Help</h4>
          <a className="text-slate-400 hover:text-blue-300 hover:translate-x-1 transition-transform duration-200 cursor-pointer" href="#">Shipping Info</a>
          <div className="mt-4 flex gap-4">
            <a className="text-slate-400 hover:text-blue-300 transition-colors" href="#"><Mail size={20} /></a>
            <a className="text-slate-400 hover:text-blue-300 transition-colors" href="#"><Headset size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
