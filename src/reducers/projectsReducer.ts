import { FETCH_PROJECTS, INCREMENT_SECOND_BY_PROJECTID, RESET_STOPWATCH_BY_PROJECTID, UPDATE_STOPWATCH_BY_PROJECTID } from '../store/actionCreator';

const initialState: any = [];

export default function projectsReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    case INCREMENT_SECOND_BY_PROJECTID:
      state = state.map((project: any) => {
        if (project.id === action.payload) {
          project.logged.seconds++;
        }
        return project;
      });
      return state;
    case UPDATE_STOPWATCH_BY_PROJECTID:
      state = state.map((project: any) => {
        if (project.logged.seconds > 59) {
          project.logged.seconds = 0;
          project.logged.minutes++;
        }

        if (project.logged.minutes > 59) {
          project.logged.minutes = 0;
          project.logged.hours++;
        }
        return project;
      });
      return state;
    case RESET_STOPWATCH_BY_PROJECTID:
      state = state.map((project: any) => {
        console.log(action.payload);
        if (project.id === action.payload) {
          console.log(project.logged);
          project.logged = { seconds: 0, minutes: 0, hours: 0 };
        }
        return project;
      });
      return state;
    default:
      return state;
  }
}
