import { takeEvery, put, call, delay, takeLatest } from "redux-saga/effects";
import { LOAD_NAMES, START, LOAD_5_ALIKE_NAMES } from "../config/actions";
import { putNames, put5AlikeNames } from "../actions/names";

function fetchNames() {
  return fetch("http://localhost:3001/names").then(res => res.json());
}
function* workerLoadNames() {
  const response = yield call(fetchNames);
  yield put(putNames(response));
}
export function* watchLoadNames() {
  yield takeEvery(LOAD_NAMES + START, workerLoadNames);
}



function fetch5AlikeNames(pattern) {
  return pattern
    ? fetch(`http://localhost:3001/names?value_like=^${pattern}&_limit=5`)
        .then(res => res.json())
    : [];
}
function* workerLoad5AlikeNames(action) {
  const response = yield call(fetch5AlikeNames, action.payload.pattern);
  yield delay(300);
  yield put(put5AlikeNames(response));
}
export function* watchLoad5AlikeNames() {
  yield takeLatest(LOAD_5_ALIKE_NAMES + START, workerLoad5AlikeNames);
}
