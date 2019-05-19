import { take, takeLatest, call, put, select, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from '../../utils/apiHelper';


const apiUri = 'testimonial';

function* fetchData() {
  yield call(
    XcelTrip.get(
      apiUri,
      actions.fetchTestimonialSuccess,
      actions.fetchTestimonialError,
    ),
  );
}

export default function* listTestimonialSaga() {
  yield takeLatest(types.FETCH_TESTIMONIAL_REQUEST, fetchData);
}
