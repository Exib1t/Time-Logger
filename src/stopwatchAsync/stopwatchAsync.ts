import { INCREMENT_SECOND_BY_PROJECTID, UPDATE_STOPWATCH_BY_PROJECTID } from '../store/actionCreator';

export const startStopwatch = (inter: any, id: any) => {
  return async (dispatch: any) => {
    inter.current = setInterval(() => {
      dispatch({ type: INCREMENT_SECOND_BY_PROJECTID, payload: id.toString() });
      dispatch({ type: UPDATE_STOPWATCH_BY_PROJECTID, payload: id.toString() });
    }, 1000);
  };
};

export const stopStopwatch = (inter: { current: string | number | NodeJS.Timeout | undefined }) => {
  return async (dispatch: any) => {
    clearInterval(inter.current);
  };
};
