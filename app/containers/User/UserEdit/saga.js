import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.POST_USER_DATA_SUCCESS);
  yield put(push('/admin/user'));
}

function* postData(action) {
  const apiUri = `user`;
  const { data } = action;
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      apiUri,
      actions.postUserDataSuccess,
      actions.postUserDataError,
      data,
      token,
    ),
  );
}

export default function* userEditSaga() {
  yield takeLatest(types.POST_USER_DATA_REQUEST, postData);
}
