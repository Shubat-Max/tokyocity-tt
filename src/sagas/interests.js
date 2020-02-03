import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_INTERESTS, START } from "../config/actions";
import { putInterests } from "../actions/interests";

function fetchInterests() {
  return fetch("http://localhost:3001/interests").then(res => res.json());
}
function* workerLoadInterests() {
  const response = yield call(fetchInterests);
  yield put(putInterests(response));
}
export function* watchLoadInterests() {
  yield takeEvery(LOAD_INTERESTS + START, workerLoadInterests);
}
