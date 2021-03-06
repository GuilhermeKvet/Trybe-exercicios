// Neste arquivo você deverá combinar os seus reducers.
import { combineReducers } from 'redux';
import carReducer from './carReducer';
import trafficReducer from './trafficReducer';

const rootReducer = combineReducers({
  carReducer,
  trafficReducer,
});

export default rootReducer;
