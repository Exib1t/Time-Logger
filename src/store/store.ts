import { combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers({ projects: projectsReducer });

export const store = createStore(rootReducer);
