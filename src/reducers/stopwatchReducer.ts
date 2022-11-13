import { INCREMENT_SECOND, RESET_STOPWATCH, SET_STOPWATCH, UPDATE_STOPWATCH } from '../store/actionCreator';

// const initialState: StopWatch = {
//   seconds: 0,
//   minutes: 0,
//   hours: 0,
// };

const initialState: StopWatch = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

export default function stopwatchReducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    case INCREMENT_SECOND:
      return { ...state, seconds: state.seconds + 1 };
    case RESET_STOPWATCH:
      return initialState;
    case SET_STOPWATCH:
      return action.payload;
    case UPDATE_STOPWATCH: {
      if (state.seconds > 59) {
        state.seconds = 0;
        state.minutes++;
      }

      if (state.minutes > 59) {
        state.minutes = 0;
        state.hours++;
      }

      return state;
    }
    default:
      return state;
  }
}

interface StopWatch {
  seconds: number;
  minutes: number;
  hours: number;
}
