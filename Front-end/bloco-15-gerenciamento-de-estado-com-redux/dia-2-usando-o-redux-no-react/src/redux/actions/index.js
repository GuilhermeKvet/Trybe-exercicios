export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
export const MOVE_CAR = 'MOVE_CAR';

export const changeSignalAction = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});

export const moveCarAction = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});
