import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import XcelTrip from '../../utils/apiHelper';
import * as actions from './actions';
import * as types from './constants';

const apiUri = `login`;

function* redirectOnSuccess() {
  const action = yield take(types.SUBMIT_INFO_SUCCESS);
  yield put(push('/admin'));
}

function* fetchData(action) {
  const { data } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      apiUri,
      actions.submitLoginInfoSuccess,
      actions.submitLoginInfoError,
      data,
      '',
    ),
  );
}

export default function* loginFormSaga() {
  yield takeLatest(types.SUBMIT_INFO_REQUEST, fetchData);
}
