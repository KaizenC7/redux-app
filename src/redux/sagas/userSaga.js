// src/redux/sagas/userSaga.js

import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_USERS_REQUEST } from "../actionTypes/userActionTypes";
import { fetchUsersSuccess, fetchUsersFail } from "../actions/userActions";

import { get } from "../../api/api_helper";
import { GET_USERS } from "../../api/url_helper";

function* fetchUsersSaga() {
  try {
    const response = yield call(get, GET_USERS);
    yield put(fetchUsersSuccess(response));
  } catch (error) {
    yield put(fetchUsersFail(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
