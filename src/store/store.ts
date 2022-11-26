import { applyMiddleware, combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';
import thunk from 'redux-thunk';
import stopwatchReducer from '../reducers/stopwatchReducer';
import settingsModalReducer from '../reducers/settingsModalReducer';

const rootReducer = combineReducers({ projects: projectsReducer, stopwatch: stopwatchReducer, settings: settingsModalReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
