import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
   
} from "./actionTypes";
import { apiSuccess, apiFail } from "./actions";



export function* watchGetChartsData() {
     //yield takeEvery();
}

function* dashboardSaga() {
    yield all([fork(watchGetChartsData)]);
}

export default dashboardSaga;
