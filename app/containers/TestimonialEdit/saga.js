import { take, takeLatest, call, put, select,fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* getDataById(action) {
  console.log(action, ' from the saga');
  const {id} = action;
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

// Individual exports for testing
export default function* testimonialEditSaga() {
  yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataById);
}
