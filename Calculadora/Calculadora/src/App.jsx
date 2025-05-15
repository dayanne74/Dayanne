import React, { useState } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { calculatorTheme } from './utils/themes';

function App() {
  const [theme] = useState(calculatorTheme.light);

  return (
    <div className="app" style={{ backgroundColor: theme.background }}>
      <Calculator theme={theme} />
    </div>
  );
}

export default App;