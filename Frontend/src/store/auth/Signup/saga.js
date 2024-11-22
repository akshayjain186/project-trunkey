import { takeLatest, call, put } from "redux-saga/effects";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionTypes";
import { signupSuccess, signupFailure } from "./actions";

import {
    SignupApi,
} from "../../../helpers/fakebackend_helper"




function* SignupUser({ payload: { user, navigate }}) {
    console.log("f",user)
    try {
        // if (import.meta.env.VITE_VITE_APP_DEFAULTAUTH === "fake"){
            console.log("qwertyui")
        const response = yield call(SignupApi,user);
        console.log("response" ,response)
        // localStorage.setItem("user", JSON.stringify(response));
        
        // yield put(signupSuccess(response.data.message));
        //  navigate("/login"); 
    // }
    } catch (error) {
        yield put(signupFailure(error.response?.data?.message || "Signup failed"));
    }
}

export default function* signupSaga() {
    yield takeLatest(SIGNUP_REQUEST, SignupUser);

}
