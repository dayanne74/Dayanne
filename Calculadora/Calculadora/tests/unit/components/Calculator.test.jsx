
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../../../src/components/Calculator';

// Mock de los componentes hijos
jest.mock('../../../src/components/Display', () => ({ value, theme }) => (
  <div data-testid="mock-display" data-value={value}>
    Display
  </div>
));

jest.mock('../../../src/components/Keypad', () => ({
  onDigit,
  onoperador,
  onEquals,
  onClear,
  onDot,
  onToggleSign,
  onPercentage,
  theme
}) => (
  <div data-testid="mock-keypad">
    <button data-testid="digit-1" onClick={() => onDigit(1)}>1</button>
    <button data-testid="digit-2" onClick={() => onDigit(2)}>2</button>
    <button data-testid="operator-plus" onClick={() => onoperador('+')}>+</button>
    <button data-testid="equals" onClick={onEquals}>=</button>
    <button data-testid="clear" onClick={onClear}>AC</button>
    <button data-testid="dot" onClick={onDot}>.</button>
    <button data-testid="toggle-sign" onClick={onToggleSign}>±</button>
    <button data-testid="percentage" onClick={onPercentage}>%</button>
  </div>
));

describe('Calculator Component', () => {
  const mockTheme = {
    background: '#F2F2F2',
    displayText: '#000000',
    digitBackground: '#FFFFFF',
    digitText: '#000000',
    operadorBackground: '#FF9F0A',
    operadorText: '#FFFFFF',
    functionBackground: '#D4D4D2',
    functionText: '#000000',
  };

  test('debe renderizar el Display y Keypad', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    expect(getByTestId('mock-display')).toBeInTheDocument();
    expect(getByTestId('mock-keypad')).toBeInTheDocument();
  });

  test('debe inicializar con valor de pantalla "0"', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '0');
  });

  test('debe actualizar el valor de pantalla al presionar dígitos', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    fireEvent.click(getByTestId('digit-1'));
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '1');
    
    fireEvent.click(getByTestId('digit-2'));
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '12');
  });

  test('debe realizar una suma correctamente', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    // Presionar 2 + 3 =
    fireEvent.click(getByTestId('digit-2'));
    fireEvent.click(getByTestId('operator-plus'));
    fireEvent.click(getByTestId('digit-1'));
    fireEvent.click(getByTestId('equals'));
    
    // Debe mostrar 3 (2 + 1 = 3)
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '3');
  });

  test('debe limpiar la pantalla con AC', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    fireEvent.click(getByTestId('digit-1'));
    fireEvent.click(getByTestId('digit-2'));
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '12');
    
    fireEvent.click(getByTestId('clear'));
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '0');
  });

  test('debe añadir punto decimal correctamente', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    fireEvent.click(getByTestId('digit-1'));
    fireEvent.click(getByTestId('dot'));
    fireEvent.click(getByTestId('digit-2'));
    
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '1.2');
  });

  test('debe cambiar el signo correctamente', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    fireEvent.click(getByTestId('digit-1'));
    fireEvent.click(getByTestId('digit-2'));
    fireEvent.click(getByTestId('toggle-sign'));
    
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '-12');
  });

  test('debe calcular porcentaje correctamente', () => {
    const { getByTestId } = render(<Calculator theme={mockTheme} />);
    
    fireEvent.click(getByTestId('digit-1'));
    fireEvent.click(getByTestId('digit-2'));
    fireEvent.click(getByTestId('percentage'));
    
    expect(getByTestId('mock-display')).toHaveAttribute('data-value', '0.12');
  });
});
