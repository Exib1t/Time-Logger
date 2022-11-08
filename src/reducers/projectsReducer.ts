import { FETCH_PROJECTS } from '../store/actionCreator';

const initialState: any = [];

export default function projectsReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}
