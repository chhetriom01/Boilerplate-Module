/*
 *
 * TestimonialEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';
// import { stat } from 'fs';

export const initialState = fromJS({
  loading: false,
  postResponse: {},
  getTestimonialByIdResponse: {},
  putTestimonialResponse: {},
  error: {},
});

function testimonialEditReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT_TESTIMONIAL_REQUEST:
      // console.log(action, 'from reducers');
      return state.merge({
        loading: true,
      });

    case types.SUBMIT_TESTIMONIAL_SUCCESS:
      // console.log(action, 'from reducers success');
      return state.merge({
        loading: false,
        postResponse: action,
      });

    case types.SUBMIT_TESTIMONIAL_ERROR:
      return state.merge({
        loading: true,
        error,
      });

    case types.GET_DATA_BY_ID_REQUEST:
      // console.log('from reducers', action);
      return state.merge({
        loading: true,
      });
    case types.GET_DATA_BY_ID_SUCCESS:
      // console.log('from reducers Success', action.response);

      return state.merge({
        loading: false,
        getTestimonialByIdResponse: action.response,
      });
    case types.GET_DATA_BY_ID_ERROR:
      return state.merge({
        loading: true,
        error: action.error,
      });

    case types.PUT_DATA_BY_ID_REQUEST:
      return state.merge({
        loading: true,
      });
    case types.PUT_DATA_BY_ID_SUCCESS:
      // console.log('from success', action.response);
      return state.merge({
        loading: false,
        putTestimonialResponse: action.response,
      });
    case types.PUT_DATA_BY_ID_ERROR:
      return state.merge({
        loading: true,
        error: action.error,
      });
    default:
      return state;
  }
}

export default testimonialEditReducer;
