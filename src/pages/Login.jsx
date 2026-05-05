import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, UserPlus, Github, Chrome } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import Button from '../Components/atoms/Button';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    login({ email, name: email.split('@')[0] });
    navigate('/');
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-20 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl border border-outline-variant/30 shadow-xl w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-blue-600 tracking-tighter mb-2">NexusShop</h1>
          <h2 className="text-2xl font-bold text-on-surface">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-secondary mt-2">
            {isLogin ? 'Enter your details to access your account' : 'Join us to start your premium shopping experience'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-12 pr-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                placeholder="name@example.com" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={20} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-12 pr-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <button type="button" className="text-sm text-primary font-semibold hover:underline">Forgot Password?</button>
            </div>
          )}

          <Button type="submit" className="w-full py-4 text-lg">
            {isLogin ? <><LogIn size={20} /> Sign In</> : <><UserPlus size={20} /> Sign Up</>}
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/30"></div></div>
          <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-outline">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors font-semibold">
            <Chrome size={20} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors font-semibold">
            <Github size={20} /> GitHub
          </button>
        </div>

        <p className="text-center mt-10 text-secondary">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-primary font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
