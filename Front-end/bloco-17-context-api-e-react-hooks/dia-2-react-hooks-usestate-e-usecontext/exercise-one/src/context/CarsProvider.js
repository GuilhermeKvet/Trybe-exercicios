import React, { useState } from 'react';
import CarsContext from './CarsContext';

export function CarsProvider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setCars((prevState) => ({ ...prevState, [car]: side }));
  };

  return (
    <CarsContext.Provider value={ {...cars, moveCar} }>
      {children}
    </CarsContext.Provider>
  );
}

export default CarsProvider;
