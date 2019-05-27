import { take, takeLatest, fork, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.POST_USER_DATA_SUCCESS);
  yield put(push('/admin/user'));
}

function* postData(action) {
  const apiUri = `user`;
  const token = localStorage.getItem('token');
  const { data } = action;
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

function* getDataById(action) {
  const { id } = action;
  const token = localStorage.getItem('token');
  const apiUri = `user/${id}`;
  yield fork(
    XcelTrip.get(
      apiUri,
      actions.getUserDataByIdSuccess,
      actions.getUserDataByIdError,
      token,
    ),
  );
}

function* redirectOnSuccesss() {
  const action = yield take(types.PUT_USER_DATA_BY_ID_SUCCESS);
  yield put(push('/admin/user'));
}

function* putDataById(action) {
  const { data, id } = action;
  console.log("from saga of put",data,id);
  const apiUri = `user/${id}`;
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccesss);
  yield fork(
    XcelTrip.put(
      apiUri,
      actions.putUserDataByIdSuccess,
      actions.putUserDataByIdError,
      data,
      token,
    ),
  );
}

export default function* userEditSaga() {
  yield takeLatest(types.POST_USER_DATA_REQUEST, postData);
  yield takeLatest(types.GET_USER_DATA_BY_ID_REQUEST, getDataById);
  yield takeLatest(types.PUT_USER_DATA_BY_ID_REQUEST, putDataById);
}
