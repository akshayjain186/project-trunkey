import { LOGIN_SUCCESS, LOGIN_USER, API_ERROR } from './actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
  loading: false, // Added `loading` to the initial state
};

/**
 * Authentication reducer to manage authentication state.
 *
 * @param {Object} state - The current state of authentication.
 * @param {Object} action - The dispatched action.
 * @param {string} action.type - The type of the dispatched action.
 * @param {Object} [action.payload] - The payload of the action, if applicable.
 * @returns {Object} - The updated state of the authentication.
 */
const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload, // Assuming user data comes in action.payload
        isAuthenticated: true,
        loading: false,
        error: "",
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
