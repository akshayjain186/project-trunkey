import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/login/saga';

/**
 * Root saga for the application.
 * 
 * Combines all the sagas used in the application into a single root saga.
 * 
 * This saga initializes all child sagas using `fork`, allowing them to run 
 * concurrently without blocking each other. The `all` effect ensures that 
 * all the sagas are started simultaneously.
 * 
 * Currently includes:
 * - `authSaga`: Handles authentication-related side effects.
 * 
 * @generator
 * @yields {Array} - An array of forked sagas to be run concurrently.
 */
export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
