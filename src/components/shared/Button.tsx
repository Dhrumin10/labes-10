import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  children, 
  icon: Icon, 
  href, 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300";
  const variants = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 border-transparent shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    secondary: "text-white border-white hover:bg-white hover:text-gray-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
  };

  const buttonContent = (
    <>
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default Button;