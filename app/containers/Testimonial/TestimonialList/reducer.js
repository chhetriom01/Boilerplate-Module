/*
 *
 * ListTestimonial reducer
 *
 */

import { fromJS } from 'immutable';
import * as type from './constants';

export const initialState = fromJS({
  loading: false,
  fetchResponse: {},
  patchResponse: {},
  error: {}
});

function listTestimonialReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_TESTIMONIAL_REQUEST:
      return state.merge({
        loading: true,
      });
    case type.FETCH_TESTIMONIAL_SUCCESS:
      return state.merge({
        loading: false,
        fetchResponse: action.response.dataList,
      });
    case type.FETCH_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error: action.error,
      });
    case type.PATCH_TESTIMONIAL_REQUEST:
      return state.merge({
        loading: true,
      });

    case type.PATCH_TESTIMONIAL_SUCCESS:

      return state.merge({
        loading: false,
        patchResponse: action.response,
      });
    case type.PATCH_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error: action.error,
      });

    default:
      return state;
  }
}

export default listTestimonialReducer;
