// Función para realizar calculos matematicos
export const realizarcalculo = (primeroperando, segundoperando, operador) => {
  switch (operador) {
    case '+':
      return primeroperando + segundoperando;
    case '-':
      return primeroperando - segundoperando;
    case '*':
      return primeroperando * segundoperando;
    case '/':
      return segundoperando !== 0 ? primeroperando / segundoperando : 'Error';
    default:
      return segundoperando;
  }
};


export const formatNumber = (value) => {
  const stringValue = String(value);

  if (stringValue === 'Error') return stringValue;

  const [integerPart, decimalPart] = stringValue.split('.');

  // Asegúrate de que el parseo sea seguro
  const formattedIntegerPart = Number(integerPart).toLocaleString('en-US');

  if (decimalPart !== undefined) {
    return `${formattedIntegerPart}.${decimalPart}`;
  }

  return formattedIntegerPart;
};
