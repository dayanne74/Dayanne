import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Keypad from '../../../src/components/Keypad';

describe('Keypad Component', () => {
  const mockTheme = {
    digitBackground: '#FFFFFF',
    digitText: '#000000',
    operadorBackground: '#FF9F0A',
    operadorText: '#FFFFFF',
    functionBackground: '#D4D4D2',
    functionText: '#000000',
  };
  
  const mockProps = {
    onDigit: jest.fn(),
    onoperador: jest.fn(),
    onEquals: jest.fn(),
    onClear: jest.fn(),
    onDot: jest.fn(),
    onToggleSign: jest.fn(),
    onPercentage: jest.fn(),
    theme: mockTheme
  };

  test('debe renderizar todos los botones correctamente', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    // Verificar botones de funciones
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('±')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    
    // Verificar botones de operadores
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('×')).toBeInTheDocument();
    expect(getByText('−')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
    
    // Verificar botones de dígitos
    for (let i = 0; i <= 9; i++) {
      expect(getByText(i.toString())).toBeInTheDocument();
    }
    
    // Verificar botón de punto decimal
    expect(getByText('.')).toBeInTheDocument();
  });

  test('debe llamar a onDigit con el dígito correcto al hacer clic', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('5'));
    expect(mockProps.onDigit).toHaveBeenCalledWith(5);
  });

  test('debe llamar a onoperador con el operador correcto al hacer clic', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('+'));
    expect(mockProps.onoperador).toHaveBeenCalledWith('+');
    
    fireEvent.click(getByText('−'));
    expect(mockProps.onoperador).toHaveBeenCalledWith('-');
    
    fireEvent.click(getByText('×'));
    expect(mockProps.onoperador).toHaveBeenCalledWith('*');
    
    fireEvent.click(getByText('÷'));
    expect(mockProps.onoperador).toHaveBeenCalledWith('/');
  });

  test('debe llamar a onClear al hacer clic en AC', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('AC'));
    expect(mockProps.onClear).toHaveBeenCalledTimes(1);
  });

  test('debe llamar a onEquals al hacer clic en =', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('='));
    expect(mockProps.onEquals).toHaveBeenCalledTimes(1);
  });

  test('debe llamar a onDot al hacer clic en .', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('.'));
    expect(mockProps.onDot).toHaveBeenCalledTimes(1);
  });

  test('debe llamar a onToggleSign al hacer clic en ±', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('±'));
    expect(mockProps.onToggleSign).toHaveBeenCalledTimes(1);
  });

  test('debe llamar a onPercentage al hacer clic en %', () => {
    const { getByText } = render(<Keypad {...mockProps} />);
    
    fireEvent.click(getByText('%'));
    expect(mockProps.onPercentage).toHaveBeenCalledTimes(1);
  });
});
