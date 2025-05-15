import React from 'react';
import './Button.css';

const Button = ({ text, onClick, wide = false, buttonStyle = 'default', theme }) => {
  
  const getButtonStyle = () => {
    switch (buttonStyle) {
      case 'operador':
        return { backgroundColor: theme.operadorBackground, color: theme.operadorText };
      case 'function':
        return { backgroundColor: theme.functionBackground, color: theme.functionText };
      default:
        return { backgroundColor: theme.digitBackground, color: theme.digitText };
    }
  };

  const { backgroundColor, color } = getButtonStyle();

  return (
    <button
      className={`button ${wide ? 'wide' : ''}`}
      style={{ backgroundColor, color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;