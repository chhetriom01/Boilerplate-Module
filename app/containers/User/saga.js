import { take, takeLatest, call, put, fork } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';
const token = localStorage.getItem('token');

function* getData() {
  const apiUri = 'user';
  
  yield fork(
    XcelTrip.get(
      apiUri,
      actions.getUserDataSuccess,
      actions.getUserDataError,
      token,
    ),
  );
}

function* patchData(action) {
  const { id } = action;
  // console.log("from user patch saga",id)
  const apiUri = `user/${id}`;
  yield fork(
    XcelTrip.patch(
      apiUri,
      actions.patchUserDataSuccess,
      actions.patchUserDataError,
      {"deleted":"true"},
      token,
    ),
  );
}

export default function* userSaga() {
  yield takeLatest(types.GET_USER_DATA_REQUEST, getData);
  yield takeLatest(types.PATCH_USER_DATA_REQUEST, patchData);
}
