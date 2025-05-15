import React from 'react';
import { render } from '@testing-library/react';
import Display from '../../../src/components/Display';

describe('Display Component', () => {
  const mockTheme = {
    displayText: '#FFFFFF',
  };

  test('debe mostrar el valor correctamente', () => {
    const { getByText } = render(<Display value="123" theme={mockTheme} />);
    expect(getByText('123')).toBeInTheDocument();
  });

  test('debe aplicar el color del tema', () => {
    const { container } = render(<Display value="123" theme={mockTheme} />);
    const displayText = container.querySelector('.display-text');
    
    expect(displayText).toHaveStyle({
      color: mockTheme.displayText
    });
  });

  test('debe ajustar el tamaño de fuente para valores cortos', () => {
    const { container } = render(<Display value="123" theme={mockTheme} />);
    const displayText = container.querySelector('.display-text');
    
    expect(displayText).toHaveStyle({
      fontSize: '3.5rem'
    });
  });

  test('debe ajustar el tamaño de fuente para valores de longitud media', () => {
    const { container } = render(<Display value="123456" theme={mockTheme} />);
    const displayText = container.querySelector('.display-text');
    
    expect(displayText).toHaveStyle({
      fontSize: '3rem'
    });
  });

  test('debe ajustar el tamaño de fuente para valores largos', () => {
    const { container } = render(<Display value="123456789" theme={mockTheme} />);
    const displayText = container.querySelector('.display-text');
    
    expect(displayText).toHaveStyle({
      fontSize: '2.5rem'
    });
  });

  test('debe ajustar el tamaño de fuente para valores muy largos', () => {
    const { container } = render(<Display value="12345678901" theme={mockTheme} />);
    const displayText = container.querySelector('.display-text');
    
    expect(displayText).toHaveStyle({
      fontSize: '2rem'
    });
  });
});