import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline' | 'outline-white' | 'black';
  size?: 'normal' | 'large';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'white', 
  size = 'normal', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "rounded-full font-bold transition-colors duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-black hover:bg-white/90 border border-transparent",
    secondary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent",
    white: "bg-[var(--color-button-white)] text-black hover:bg-[var(--color-button-white-hover)] border border-transparent",
    outline: "bg-white/5 border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[rgba(29,155,240,0.1)]",
    "outline-white": "bg-white/5 border border-[#536471] text-white hover:bg-[#eff3f41a]",
    black: "bg-black text-white hover:bg-[rgba(255,255,255,0.03)] border border-[var(--color-gray)]"
  };
  const sizes = {
    normal: "px-4 py-2 text-[15px]",
    large: "px-8 py-3 text-[17px]"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
