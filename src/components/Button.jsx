import React, { Children } from 'react';

function Button({ label,backgroundColor = 'transparent', color = 'light', size = 'sm', onClick, rounded = false, padding, icon, border, className }) {
  return (
    <button
      className={`btn btn-outline-${color} ${padding} px-3  btn-${size} ${border} ${className}`}
      onClick={onClick}
      style={{backgroundColor: backgroundColor, borderRadius: `${rounded ? '50px' : ''}` }}
    >
      {icon && <span className={`me-2 ${icon}`}></span>} {/* Render icon if available */}
      {label}
    </button>
  );
}

export default Button;
