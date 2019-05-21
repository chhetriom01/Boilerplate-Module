import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

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
  yield put(push('/admin/testimonial/listtestimonial'));
}

function* putDataById(action) {
  console.log(action, 'from saga');
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
  yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataById);
  yield takeLatest(types.PUT_DATA_BY_ID_REQUEST, putDataById);
}
