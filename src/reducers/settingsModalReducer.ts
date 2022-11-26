import { EDIT_PROJECT_ID, GET_PROJECT_ID } from '../store/actionCreator';

const initialState = {
  id: '0',
};

export default function settingsModalReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_PROJECT_ID:
      return state.id;
    case EDIT_PROJECT_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}
