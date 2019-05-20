/*
 *
 * TestimonialEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  getTestimonialByIdResponse: {},
  error: {},
});

function testimonialEditReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA_BY_ID_REQUEST:
      console.log('from reducers', action);
      return state.merge({
        loading: true,
      });
    case types.GET_DATA_BY_ID_SUCCESS:
      console.log('from reducers Success', action);

      return state.merge({
        loading: false,
        getTestimonialByIdResponse: action,
      });
    case types.GET_DATA_BY_ID_ERROR:
      return state.merge({
        loading: true,
        error: action.error,
      });
    default:
      return state;
  }
}

export default testimonialEditReducer;
