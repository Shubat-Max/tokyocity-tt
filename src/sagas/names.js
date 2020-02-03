import { takeEvery, put, call } from "redux-saga/effects";
import { LOAD_NAMES, START } from "../config/actions";
import { putNames } from "../actions/names";

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
