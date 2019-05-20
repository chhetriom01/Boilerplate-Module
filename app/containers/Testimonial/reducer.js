/*
 *
 * Testimonial reducer
 *
 */

import { fromJS } from 'immutable';
import * as type from './constants';

export const initialState = fromJS({
  loading: false,
  postResponse: {},
  fetchResponse: {},
});

function testimonialReducer(state = initialState, action) {
  switch (action.type) {
    case type.SUBMIT_TESTIMONIAL_REQUEST:
      console.log(action, 'from reducers');
      return state.merge({
        loading: true,
      });

    case type.SUBMIT_TESTIMONIAL_SUCCESS:
        // console.log(action, 'from reducers success');
      return state.merge({
        loading: false,
        postResponse: action,
      });

    case type.SUBMIT_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error,
      });

    default:
      return state;
  }
}

export default testimonialReducer;
