import { take, takeLatest, call, put, fork } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';

function* getData() {
  const token = localStorage.getItem('token');
  const apiUri = "user";
  yield fork(
    XcelTrip.get(
      apiUri, 
      actions.getUserDataSuccess, 
      actions.getUserDataError,
      token
      )
  );
}

export default function* userSaga() {
  yield takeLatest(types.GET_USER_DATA_REQUEST, getData);
}
