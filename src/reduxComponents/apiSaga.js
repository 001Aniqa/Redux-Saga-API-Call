// apiSaga.js

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga

function* fetchData(action) {
  try {
    const response = yield call(axios.get, action.payload.url); // Making the API call
    yield put({ type: 'FETCH_SUCCESS', data: response.data });   // Dispatch a success action
  } catch (error) {
    yield put({ type: 'FETCH_FAILURE', error });                // Dispatch an error action
  }
}

// Watcher Saga

function* watchFetchData() {
  yield takeEvery('FETCH_REQUEST', fetchData); // Listen for FETCH_REQUEST action
}

export default function* apiSaga() {
  yield watchFetchData();
}
