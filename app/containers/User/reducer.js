/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  getResponse: {},
  patchResponse :{},
  error: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_DATA_REQUEST:
      return state.merge({
        loading: true,
      });
    case types.GET_USER_DATA_SUCCESS:
      return state.merge({
        loading: false,
        getResponse: action.response.dataList,
      });
    case types.GET_USER_DATA_ERROR:
      return state.merge({
        loading: true,
        error: action.error.message,
      });

    case types.PATCH_USER_DATA_REQUEST:
      return state.merge({
        loading: true,
      });
    case types.PATCH_USER_DATA_SUCCESS:
      return state.merge({
        loading: false,
        patchResponse: action.response,
      });

    case types.PATCH_USER_DATA_ERROR:
      return state.merge({
        loading: true,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default userReducer;
