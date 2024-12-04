import { combineReducers } from 'redux';
import authReducer from './auth/login/reducer';
import Layout from "./layout/reducer";
/**
 * Combines all the individual reducers into a single root reducer.
 *
 * @returns {object} - The root reducer that will be passed to the Redux store.
 */
const rootReducer = combineReducers({
  Login: authReducer, // Renamed key for clarity and consistency
  Layout,
});

export default rootReducer;
