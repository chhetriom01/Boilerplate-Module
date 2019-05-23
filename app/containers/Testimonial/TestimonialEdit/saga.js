import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* redirectOnSuccesss() {
  const action = yield take(types.SUBMIT_TESTIMONIAL_SUCCESS);
  yield put(push('/admin/testimonial'));
}

function* postData(action) {
  const apiUri = `testimonial`;
  const { data } = action;
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccesss);
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

function* getDataById(action) {
  // console.log(action,'from the saga');
  const { id } = action;
  const apiUri = `testimonial/${id}`;
  yield fork(
    XcelTrip.get(
      apiUri,
      actions.getTestimonialByIdSuccess,
      actions.getTestimonialByIdError,
      action,
    ),
  );
}

function* redirectOnSuccess() {
  const action = yield take(types.PUT_DATA_BY_ID_SUCCESS);
  yield put(push('/admin/testimonial'));
}

function* putDataById(action) {
  // console.log(action, 'from saga');
  const { data, id } = action;
  const apiUri = `testimonial/${id}`;
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.put(
      apiUri,
      actions.putTestimonialByIdSuccess,
      actions.getTestimonialByIdError,
      data,
      token,
    ),
  );
}

// Individual exports for testing
export default function* testimonialEditSaga() {
  yield takeLatest(types.SUBMIT_TESTIMONIAL_REQUEST, postData);
  yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataById);
  yield takeLatest(types.PUT_DATA_BY_ID_REQUEST, putDataById);
}
