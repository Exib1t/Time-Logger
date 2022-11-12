import { INCREMENT_SECOND, UPDATE_STOPWATCH } from '../store/actionCreator';

export const startStopwatch = (inter: { current: NodeJS.Timer }) => {
  return async (dispatch: any) => {
    inter.current = setInterval(() => {
      dispatch({ type: INCREMENT_SECOND });
      dispatch({ type: UPDATE_STOPWATCH });
    }, 1000);
  };
};

export const stopStopwatch = (inter: { current: string | number | NodeJS.Timeout | undefined }) => {
  return async (dispatch: any) => {
    clearInterval(inter.current);
  };
};
