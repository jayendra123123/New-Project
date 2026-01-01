import React from 'react';

export const Icon = ({ name, className = '', style }) => (
  <span 
    className={`material-symbols-outlined select-none ${className}`} 
    style={style}
  >
    {name}
  </span>
);
