/*
 *
 * UserEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';


export const initialState = fromJS({
  laoding: false,
  error: '',
});

function userEditReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_USER_DATA_REQUEST:
      // console.log("from the reducer",action)
      return state.merge({
        loading: true,
      });
    case types.POST_USER_DATA_SUCCESS:
      return state.merge({
        loading: false,
        postResponse: action.response,
      });
    case types.POST_USER_DATA_ERROR:
      console.log("from reducer of  useredit Error",action.error)
      return state.merge({
        laoding: true,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default userEditReducer;
