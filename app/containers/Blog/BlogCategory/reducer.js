/*
 *
 * BlogCategory reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  getResponse: {},
  error: '',
});

function blogCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BLOG_CATEGORY_REQUEST:
      return state.merge({
        loading: true,
      });

    case types.GET_BLOG_CATEGORY_SUCCESS:
      // console.log("from the getsuccess",action.response);
      return state.merge({
        loading: false,
        getResponse: action.response.dataList,
      });

    case types.GET_BLOG_CATEGORY_ERROR:
      return state.merge({
        loading: true,
        error: action.error.message,
      });

    default:
      return state;
  }
}

export default blogCategoryReducer;
