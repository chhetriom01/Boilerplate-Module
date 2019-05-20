import { take,takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* getDataById(action) {
  console.log(action, ' from the saga');
  const apiUri = 'testimonial';
  XcelTrip.ger(
    apiUri,
    actions.getTestimonialByIdRequest,
    actions.getTestimonialByIdError,

  );
}

// Individual exports for testing
export default function* testimonialEditSaga() {
  // yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataById);
}
