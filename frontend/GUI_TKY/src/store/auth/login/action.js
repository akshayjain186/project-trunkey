import {  API_ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGOUT } from "./actionTypes";

/**
 * Creates an action to indicate successful login.
 * 
 * @param {Object} user - The authenticated user's data.
 * @returns {Object} - An action with type `LOGIN_SUCCESS` and the user as payload.
 */
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });

/**
 * Creates an action to log out the user.
 * 
 * @returns {Object} - An action with type `LOGOUT`.
 */
export const logout = () => ({ type: LOGOUT });

/**
 * Creates an action to initiate the user login process.
 * 
 * This action triggers the `LOGIN_USER` type and provides the user's credentials
 * and a history function to navigate upon successful login.
 * 
 * @param {Object} user - The user's credentials for login.
 * @param {Function} history - A function to navigate between routes.
 * @returns {Object} - An action with type `LOGIN_USER` and the payload containing 
 *                     the user data and history function.
 */
export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

/**
 * Creates an action to handle API errors.
 * 
 * @param {string|Object} error - The error message or object received from the API.
 * @returns {Object} - An action with type `API_ERROR` and the error as payload.
 */
export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  };
};