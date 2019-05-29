/*
 *
 * Blog reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  fetchBlogResponse: {},
  error: '',
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BLOG_REQUEST:
      console.log('from  request fetch');
      return state.merge({
        loading: true,
      });

    case types.FETCH_BLOG_SUCCESS:
      // console.log('from success', action.response);
      return state.merge({
        loading: false,
        fetchBlogResponse: action.response.dataList,
      });

    case types.FETCH_BLOG_ERROR:
      console.log('from error', action.error.message);
      return state.merge({
        loading: true,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default blogReducer;
