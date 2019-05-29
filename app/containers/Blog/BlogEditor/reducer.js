/*
 *
 * BlogEditor reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  postResponse: {},
  error: '',
});

function blogEditorReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_BLOG_REQUEST:
      console.log('from reduers', action);
      return state.merge({
        loading: true,
      });

    case types.POST_BLOG_SUCCESS:
      console.log('from success', action.response);

      return state.merge({
        loading: false,
        postResponse: action.response,
      });

    case types.POST_BLOG_ERROR:
      console.log('from the error', action.error.message);
      return state.merge({
        loading: true,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default blogEditorReducer;
