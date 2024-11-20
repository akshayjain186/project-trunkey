import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods

import {
  postFakeLogin,
} from "../../../helpers/fakebackend_helper";

function* loginUser({ payload: { user, history } }) {
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
  console.log
  try {
 
    if (import.meta.env.VITE_VITE_APP_DEFAULTAUTH === "fake") {

      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      });
      console.log("response",response)

      // localStorage.setItem("authUser", JSON.stringify(response));
      //  history('/dashboard');

      yield put(loginSuccess(response));
    }
   
  } catch (error) {

    console.error("login erro".error);
    
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");

    history('/login');
  } catch (error) {
    yield put(apiError(error));
  }
}


function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
