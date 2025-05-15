import { realizarcalculo, formatNumber } from '../../../src/utils/calculatorLogic';

describe('realizarcalculo', () => {
  test('debe sumar dos números correctamente', () => {
    expect(realizarcalculo(5, 3, '+')).toBe(8);
  });

  test('debe restar dos números correctamente', () => {
    expect(realizarcalculo(5, 3, '-')).toBe(2);
  });

  test('debe multiplicar dos números correctamente', () => {
    expect(realizarcalculo(5, 3, '*')).toBe(15);
  });

  test('debe dividir dos números correctamente', () => {
    expect(realizarcalculo(6, 3, '/')).toBe(2);
  });

  test('debe devolver "Error" al dividir por cero', () => {
    expect(realizarcalculo(5, 0, '/')).toBe('Error');
  });

  test('debe devolver el segundo operando si el operador es desconocido', () => {
    expect(realizarcalculo(5, 3, 'x')).toBe(3);
  });
});

describe('formatNumber', () => {
  test('debe formatear números enteros correctamente', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  test('debe preservar los decimales al formatear', () => {
    expect(formatNumber(1000.5)).toBe('1,000.5');
  });

  test('debe devolver "Error" si el valor es "Error"', () => {
    expect(formatNumber('Error')).toBe('Error');
  });
});