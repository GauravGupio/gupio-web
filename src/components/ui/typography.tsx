import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'p', 
  children, 
  className = '', 
  style = {} 
}) => {
  const Component = variant as keyof JSX.IntrinsicElements;
  
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
};

export default Typography; 