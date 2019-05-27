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
  error: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_DATA_REQUEST:
      return state.merge({
        loading: true,
      });
    case types.GET_USER_DATA_SUCCESS:
      // console.log('success from reducers of usergetdata ', action.response);
      return state.merge({
        loading: false,
        getResponse: action.response.dataList,
      });
    case types.GET_USER_DATA_ERROR:
      // console.log('Error from reucers of user get data ', action.error);
      return state.merge({
        loading: true,
        error: action.error.message,
      });

    case types.PATCH_USER_DATA_REQUEST:
      return state.merge({
        loading: true,
      });
    case types.PATCH_USER_DATA_SUCCESS:
      console.log('from reducer of succes patch', action.response);
      return state.merge({
        loading: false,
        getResponse: action.response,
      });

    case types.PATCH_USER_DATA_ERROR:
      console.log('from patch error of user', action.error.message);
      return state.merge({
        loading: true,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default userReducer;
