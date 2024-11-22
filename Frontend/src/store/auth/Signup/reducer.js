import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionTypes";

const initialState = {
    loading: false,
    error: null,
    successMessage: null,
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.payload,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default signupReducer;