import { INCREMENT_SECOND } from '../store/actionCreator';

const initialState: StopWatch = {
  seconds: 0,
  minutes: 0,
  hours: 0,
};

export default function stopwatchReducer(state = initialState, action: { type: string; payload: any }) {
  switch (action.type) {
    default:
      return state;
  }
}

interface StopWatch {
  seconds: number;
  minutes: number;
  hours: number;
}
