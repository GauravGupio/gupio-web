import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  variant = 'default'
}) => {
  const baseClasses = `
    font-poppins font-semibold text-[15px] leading-[24px]
    tracking-[-0.09px] uppercase align-middle
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    default: `
      w-[117px] h-[37px] 
      bg-[#FFBF00] 
      border-2 border-[#FFBF00]
      rounded-[5px]
      text-[#000000]
      hover:bg-[#FFBF00]/90 hover:shadow-lg
    `,
    outline: `
      border-2 border-white text-white 
      hover:bg-white hover:text-black
      px-8 py-4 rounded-lg
    `,
    ghost: `
      bg-transparent text-white
      px-8 py-4 rounded-lg
    `
  };



  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
export { Button };
