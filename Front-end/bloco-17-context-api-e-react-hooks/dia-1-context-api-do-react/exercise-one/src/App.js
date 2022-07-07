import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsProvider from './context/CarsProvider';

function App() {
  return (
    <CarsProvider>
      <Cars />
    </CarsProvider>
  );
}

export default App;
