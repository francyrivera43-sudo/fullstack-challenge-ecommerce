import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md';
  
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-on-primary-fixed-variant',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary-fixed-dim',
    outline: 'bg-transparent border-2 border-outline-variant text-on-surface hover:bg-surface-container-low backdrop-blur-sm',
    ghost: 'text-primary hover:bg-primary/10 px-4 py-2',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
