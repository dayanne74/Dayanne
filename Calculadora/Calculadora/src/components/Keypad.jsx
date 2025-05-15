import React from 'react';
import Button from './Button';
import './Keypad.css';

const Keypad = ({ 
  onDigit, 
  onoperador, 
  onEquals, 
  onClear, 
  onDot, 
  onToggleSign, 
  onPercentage,
  theme 
}) => {
  return (
    <div className="keypad">
      <div className="row">
        <Button 
          text="AC" 
          theme={theme}
          buttonStyle="function" 
          onClick={onClear} 
        />
        <Button 
          text="±" 
          theme={theme}
          buttonStyle="function" 
          onClick={onToggleSign} 
        />
        <Button 
          text="%" 
          theme={theme}
          buttonStyle="function" 
          onClick={onPercentage} 
        />
        <Button 
          text="÷" 
          theme={theme}
          buttonStyle="operador" 
          onClick={() => onoperador('/')} 
        />
      </div>

      <div className="row">
        <Button 
          text="7" 
          theme={theme}
          onClick={() => onDigit(7)} 
        />
        <Button 
          text="8" 
          theme={theme}
          onClick={() => onDigit(8)} 
        />
        <Button 
          text="9" 
          theme={theme}
          onClick={() => onDigit(9)} 
        />
        <Button 
          text="×" 
          theme={theme}
          buttonStyle="operador" 
          onClick={() => onoperador('*')} 
        />
      </div>

      <div className="row">
        <Button 
          text="4" 
          theme={theme}
          onClick={() => onDigit(4)} 
        />
        <Button 
          text="5" 
          theme={theme}
          onClick={() => onDigit(5)} 
        />
        <Button 
          text="6" 
          theme={theme}
          onClick={() => onDigit(6)} 
        />
        <Button 
          text="−" 
          theme={theme}
          buttonStyle="operador" 
          onClick={() => onoperador('-')} 
        />
      </div>

      <div className="row">
        <Button 
          text="1" 
          theme={theme}
          onClick={() => onDigit(1)} 
        />
        <Button 
          text="2" 
          theme={theme}
          onClick={() => onDigit(2)} 
        />
        <Button 
          text="3" 
          theme={theme}
          onClick={() => onDigit(3)} 
        />
        <Button 
          text="+" 
          theme={theme}
          buttonStyle="operador" 
          onClick={() => onoperador('+')} 
        />
      </div>

      <div className="row">
        <Button 
          text="0" 
          theme={theme}
          wide={true}
          onClick={() => onDigit(0)} 
        />
        <Button 
          text="." 
          theme={theme}
          onClick={onDot} 
        />
        <Button 
          text="=" 
          theme={theme}
          buttonStyle="operador" 
          onClick={onEquals} 
        />
      </div>
    </div>
  );
};

export default Keypad;