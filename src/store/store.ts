import { applyMiddleware, combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ projects: projectsReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
