import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from '../../utils/apiHelper';

const apiUri = `testimonial`;

function* redirectOnSuccess() {
  const action = yield take(types.SUBMIT_TESTIMONIAL_SUCCESS);
  yield put(push('/admin/testimonial/listtestimonial'));
}

function* postData(action) {

  const { data } = action;
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      apiUri,
      actions.submitTestimonialSuccess,
      actions.submitTestimonialError,
      data,
      token,
    ),
  );
}

export default function* testimonialSaga() {
  yield takeLatest(types.SUBMIT_TESTIMONIAL_REQUEST, postData);
}