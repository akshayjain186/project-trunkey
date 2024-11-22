import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from "./actionTypes";

export const SignupUser = (user, navigate) => ({
    type: SIGNUP_REQUEST,
    payload: { user },
    navigate,
});

export const signupSuccess = (message) => ({
    type: SIGNUP_SUCCESS,
    payload: message,
});

export const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error,
});
