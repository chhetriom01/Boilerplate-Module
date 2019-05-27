/*
 *
 * UserEdit reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';
import { compose } from 'redux';

export const initialState = fromJS({
  laoding: false,
  error: '',
  getUserData: {},
  getResponse: {},
  putResponse: {},
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
      // console.log('from reducer of  useredit Error', action.error);
      return state.merge({
        laoding: true,
        error: action.error.message,
      });

    case types.GET_USER_DATA_BY_ID_REQUEST:
      // console.log("for request",action)
      return state.merge({
        laoding: true,
      });

    case types.GET_USER_DATA_BY_ID_SUCCESS:
      // console.log('from success', action.response);
      return state.merge({
        laoding: true,
        getResponse: action.response,
      });

    case types.GET_USER_DATA_BY_ID_ERROR:
      // console.log('error message from reducer', action.message.error);
      return state.merge({
        loading: false,
        error: action.error.message,
      });

    case types.PUT_USER_DATA_BY_ID_REQUEST:
      return state.merge({
        loading: true,
      });

    case types.PUT_USER_DATA_BY_ID_SUCCESS:
      // console.log('from success reducer', action);
      return state.merge({
        laoding: false,
        putResponse: action.response,
      });

    case types.PUT_USER_DATA_BY_ID_ERROR:
      console.log('from reducer of error ', action.error.message);
      return state.merge({
        laoding: true,
        error: action.error.message,
      });

    default:
      return state;
  }
}

export default userEditReducer;
