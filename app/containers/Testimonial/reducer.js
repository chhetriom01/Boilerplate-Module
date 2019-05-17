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
  kiran: ''
});

function testimonialReducer(state = initialState, action) {
  switch (action.type) {
    case type.SUBMIT_TESTIMONIAL_REQUEST:
      console.log(action, 'from reducers');
      return state.merge({
        loading: true,
      });

    case type.SUBMIT_TESTIMONIAL_SUCCESS:
      return state.merge({
        loading: false,
        postResponse: action,
      });

    case type.SUBMIT_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error,
      });

    case type.FETCH_TESTIMONIAL_REQUEST:
      return state.merge({
        loading: true,
      });
    case type.FETCH_TESTIMONIAL_SUCCESS:
      console.log('from reducers', action.response);
      return state.merge({
        loading: false,
        fetchResponse: action.response,
      });
    case type.FETCH_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error,
      });
    default:
      return state;
  }
}

export default testimonialReducer;
