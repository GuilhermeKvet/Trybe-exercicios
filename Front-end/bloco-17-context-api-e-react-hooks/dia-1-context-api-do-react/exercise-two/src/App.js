import React from 'react';
import TrafficSignal from './TrafficSignal';
import Provider from './context/provider';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <div className="container">
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    </div>
  );
}

export default App;
