import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Test from './components/test.js';

function App() {
  return (
    <ThemeProvider>
      <Test></Test>
    </ThemeProvider>
  );
}

export default App;
