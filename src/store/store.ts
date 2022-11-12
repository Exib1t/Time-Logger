import { applyMiddleware, combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';
import thunk from 'redux-thunk';
import stopwatchReducer from '../reducers/stopwatchReducer';

const rootReducer = combineReducers({ projects: projectsReducer, stopwatch: stopwatchReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
