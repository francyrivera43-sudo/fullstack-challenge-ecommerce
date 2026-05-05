import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyles = 'font-label-sm px-2 py-1 rounded text-[10px] uppercase font-bold z-10';
  
  const variants = {
    default: 'bg-surface-variant text-on-surface-variant',
    bestSeller: 'bg-tertiary-container text-on-tertiary-container',
    discount: 'bg-error-container text-on-error-container',
    new: 'bg-primary-fixed-dim text-on-primary-fixed',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
