/*
 *
 * BlogCategoryEditor reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  postResponse: {},
  error: '',
});

function blogCategoryEditorReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_BLOG_CATEGORY_REQUEST:
      console.log('from post Blog Category request', action);
      return state.merge({
        loading: true,
      });

    case types.POST_BLOG_CATEGORY_SUCCESS:
      console.log('from the Post BlogCategory success', action.response);
      return state.merge({
        loading: false,
        postResponse: action.response,
      });

    case types.POST_BLOG_CATEGORY_ERROR:
      console.log('from the error ', action.error);
      return state.merge({
        loading: true,
        error: action.error,
      });

    default:
      return state;
  }
}

export default blogCategoryEditorReducer;
