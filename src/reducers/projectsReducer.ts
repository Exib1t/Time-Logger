import { CREATE_PROJECT, FETCH_PRODUCTS, GET_PROJECTS } from '../store/actionCreator';

const initialState: any = [
  {
    id: 1,
    name: 'Explain Learning',
    color: 'hsl(281, 52%, 63%)',
    logged: { seconds: 12, minutes: 4, hours: 26 },
    remaining: { seconds: 12, minutes: 6, hours: 12 },
  },
  {
    id: 2,
    name: 'Tick Up',
    color: 'hsl(133,40%,46%)',
    logged: { seconds: 12, minutes: 4, hours: 26 },
    remaining: { seconds: 12, minutes: 6, hours: 12 },
  },
  {
    id: 3,
    name: 'Fastit',
    color: 'hsl(62,30%,44%)',
    logged: { seconds: 12, minutes: 4, hours: 26 },
    remaining: { seconds: 12, minutes: 6, hours: 12 },
  },
  {
    id: 4,
    name: 'Relations byran',
    color: 'hsl(0,48%,59%)',
    logged: { seconds: 12, minutes: 4, hours: 26 },
    remaining: { seconds: 12, minutes: 6, hours: 12 },
  },
];

export default function projectsReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case GET_PROJECTS:
      return state;
    case CREATE_PROJECT:
      return [...state, action.payload];
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
}

// interface Project {
//   id: number;
//   name: string;
//   logged: { seconds: number; minutes: number; hours: number };
//   remaining: { seconds: number; minutes: number; hours: number };
// }
