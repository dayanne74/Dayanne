// jest.config.cjs
module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',

  // Busca tests aquí
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/unit'
  ],

  // Para que 'import X from "components/X"' busque en src/components
  moduleDirectories: [
    'node_modules',
    'src'
  ],

  moduleNameMapper: {
    
    // Alias para componentes y utilidades
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1'
  },

  // Configuración de Babel
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],

  // Tu setupTests
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
};
