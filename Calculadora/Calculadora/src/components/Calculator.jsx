import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { realizarcalculo } from '../utils/calculatorLogic';
import './Calculator.css';

const Calculator = ({ theme }) => {
  // Estados de la calculadora
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operador, setoperador] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Manipular entrada de dígitos
  const handleDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  // Manipular punto decimal
  const handleDot = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
    } else if (displayValue.indexOf('.') === -1) {
      setDisplayValue(displayValue + '.');
    }
  };

  // Manipular signo +/-
  const handleToggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  // Manipular porcentaje
  const handlePercentage = () => {
    const value = parseFloat(displayValue);
    setDisplayValue(String(value / 100));
  };

  // Manipular operaciones
  const handleoperador = (nextoperador) => {
    const inputValue = parseFloat(displayValue);

    if (previousValue == null) {
      setPreviousValue(inputValue);
    } else if (operador) {
      const result = realizarcalculo(previousValue, inputValue, operador);
      setDisplayValue(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setoperador(nextoperador);
  };

  // Realizar cálculo final
  const handleEquals = () => {
    const inputValue = parseFloat(displayValue);

    if (previousValue != null && operador) {
      const result = realizarcalculo(previousValue, inputValue, operador);
      setDisplayValue(String(result));
      setPreviousValue(null);
      setoperador(null);
      setWaitingForOperand(true);
    }
  };

  // Limpiar calculadora
  const handleClear = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setoperador(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="calculator" style={{ backgroundColor: theme.background }}>
      <Display value={displayValue} theme={theme} />
      <Keypad 
        onDigit={handleDigit}
        onoperador={handleoperador}
        onEquals={handleEquals}
        onClear={handleClear}
        onDot={handleDot}
        onToggleSign={handleToggleSign}
        onPercentage={handlePercentage}
        theme={theme}
      />
    </div>
  );
};

export default Calculator;