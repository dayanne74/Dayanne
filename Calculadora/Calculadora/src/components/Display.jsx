import React from 'react';
import './Display.css';

const Display = ({ value, theme }) => {
  const getFontSize = () => {
    if (value.length > 10) return '2rem';
    if (value.length > 8) return '2.5rem';
    if (value.length > 5) return '3rem';
    return '3.5rem';
  };

  return (
    <div className="display">
      <div 
        className="display-text" 
        style={{ 
          color: theme.displayText, 
          fontSize: getFontSize() 
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Display;