import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from '../../../utils/apiHelper';

function* fetchData() {
  const apiUri = 'testimonial';

  yield call(
    XcelTrip.get(
      apiUri,
      actions.fetchTestimonialSuccess,
      actions.fetchTestimonialError,
    ),
  );
}

function* patchData(action) {
  const { id } = action;
  const apiUri = `testimonial/${id}`,
    token = localStorage.getItem('token');
  yield fork(
    XcelTrip.patch(
      apiUri,
      actions.patchTestimonialSuccess,
      actions.fetchTestimonialError,
      {},
      token,
    ),
  );
}

export default function* listTestimonialSaga() {
  yield takeLatest(types.FETCH_TESTIMONIAL_REQUEST, fetchData);
  yield takeLatest(types.PATCH_TESTIMONIAL_REQUEST, patchData);
}
