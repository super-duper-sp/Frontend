import React from 'react';

const Logo = ({ src, alt, width = '100%', height = 'auto', className = '' }) => {
  return (
    <div  className={className} style={{ textAlign: 'center' }}>
      <img 
        src={src} 
        alt={alt || 'GIF'} 
        style={{ width, height }} 
      />
    </div>
  );
};

export default Logo;