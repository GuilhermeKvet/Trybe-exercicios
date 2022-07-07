import PropTypes from "prop-types";
import React, { useState } from "react";
import CarsContext from "./CarsContext";

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const [color, setColor] = useState("red");

  const moveCar = (car, side) => {
    setCars((preState) => ({ ...preState, [car]: side }));
  };

  const changeSignal = (signalColor) => {
    setColor(signalColor);
  };

  return (
    <CarsContext.Provider value={ {...cars, color, moveCar, changeSignal} }>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
