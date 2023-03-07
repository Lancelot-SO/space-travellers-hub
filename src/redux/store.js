import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rocketReducer from './rocket/rocketSlice';
import missionsReducer from './missions/missionsSlice';

const logger = createLogger({
  predicate: (getState, action) => action.type !== 'SOME_ACTION',
  collapsed: true,
});

const store = configureStore({
  reducer: combineReducers({
    rockets: rocketReducer,
    missions: missionsReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
