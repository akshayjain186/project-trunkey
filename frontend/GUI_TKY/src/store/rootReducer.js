import { combineReducers } from 'redux';
import authReducer from './auth/login/reducer';

/**
 * Combines all the individual reducers into a single root reducer.
 *
 * @returns {object} - The root reducer that will be passed to the Redux store.
 */
const rootReducer = combineReducers({
  Login: authReducer, // Renamed key for clarity and consistency
});

export default rootReducer;
