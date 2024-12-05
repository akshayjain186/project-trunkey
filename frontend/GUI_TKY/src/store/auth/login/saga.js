import { call, put, takeEvery } from "redux-saga/effects";
import { postLogin } from '@/services/api_helper';
import {  LOGIN_USER } from './actionTypes';
import { apiError } from "./action";

/**
 * Saga to handle user login.
 *
 * This generator function handles the `LOGIN_USER` action by calling the `postLogin` API
 * with the provided user credentials. On successful login, it stores the authenticated
 * user data in local storage and redirects the user to the home page.
 *
 * @param {Object} action - The dispatched `LOGIN_USER` action.
 * @param {Object} action.payload - The payload of the action.
 * @param {Object} action.payload.user - The user credentials for login.
 * @param {Function} action.payload.history - The function to navigate between routes.
 * @generator
 * @yields {void} - Performs side effects like API calls and state updates.
 */
function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogin, user);

    if (response?.status === 200) {
      console.log('Login faileasssssssssssd:', response);
      localStorage.setItem('authUser', JSON.stringify(response.data));
   
      history('/home');
    }
  } catch (error) {
    console.log('Login failed:', error.response);
    yield put(apiError(error?.response?.data?.message));
    // Optionally, you can dispatch an error action or update the state with the error
  }
}

/**
 * Authentication saga to watch for authentication-related actions.
 *
 * This generator function listens for the `LOGIN_USER` action and triggers the
 * `loginUser` saga to handle the login process.
 *
 * @generator
 * @yields {void} - Watches for `LOGIN_USER` actions and forks the `loginUser` saga.
 */
function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}

export default authSaga;

