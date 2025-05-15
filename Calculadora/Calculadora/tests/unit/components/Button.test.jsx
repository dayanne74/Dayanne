
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../../src/components/Button';

describe('Button Component', () => {
  const mockTheme = {
    digitBackground: '#FFFFFF',
    digitText: '#000000',
    operadorBackground: '#FF9F0A',
    operadorText: '#FFFFFF',
    functionBackground: '#D4D4D2',
    functionText: '#000000',
  };

  test('debe renderizar el texto del botón correctamente', () => {
    const { getByText } = render(<Button text="7" theme={mockTheme} />);
    expect(getByText('7')).toBeInTheDocument();
  });

  test('debe llamar a onClick cuando se hace clic en el botón', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="7" onClick={handleClick} theme={mockTheme} />
    );
    
    fireEvent.click(getByText('7'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('debe aplicar la clase "wide" cuando wide es true', () => {
    const { container } = render(
      <Button text="0" wide={true} theme={mockTheme} />
    );
    
    expect(container.firstChild).toHaveClass('wide');
  });

  test('debe aplicar el estilo de operador correcto', () => {
    const { container } = render(
      <Button text="+" buttonStyle="operador" theme={mockTheme} />
    );
    
    expect(container.firstChild).toHaveStyle({
      backgroundColor: mockTheme.operadorBackground,
      color: mockTheme.operadorText
    });
  });

  test('debe aplicar el estilo de función correcto', () => {
    const { container } = render(
      <Button text="AC" buttonStyle="function" theme={mockTheme} />
    );
    
    expect(container.firstChild).toHaveStyle({
      backgroundColor: mockTheme.functionBackground,
      color: mockTheme.functionText
    });
  });

  test('debe aplicar el estilo de dígito por defecto', () => {
    const { container } = render(
      <Button text="5" theme={mockTheme} />
    );
    
    expect(container.firstChild).toHaveStyle({
      backgroundColor: mockTheme.digitBackground,
      color: mockTheme.digitText
    });
  });
});