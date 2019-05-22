/*
 *
 * UserEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';


export const initialState = fromJS({
  laoding: false,
  error: {},
});

function userEditReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_USER_DATA_SUCCESS:
      return state.merge({
        loading: true,
      });
    case types.POST_USER_DATA_SUCCESS:
      return state.merge({
        loading: false,
        postResponse: action.response,
      });
    case types.POST_USER_DATA_ERROR:
      return stat.merge({
        laoding: true,
        error: action.error,
      });
    default:
      return state;
  }
}

export default userEditReducer;
