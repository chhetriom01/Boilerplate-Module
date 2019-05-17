/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import * as type from './constants';

export const initialState = fromJS({
  loading: false,
  loginResponse: {},
});

function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case type.SUBMIT_INFO_REQUEST:
      return state.merge({
        loading: true,
      });

    case type.SUBMIT_INFO_SUCCESS:
      localStorage.setItem('token', action.response.token);
      return state.merge({
        loading: false,
        loginResponse: action.response,
      });
    case type.SUBMIT_INFO_ERROR:
      return state.merge({
        loading: false,
        error,
      });
    default:
      return state;
  }
}

export default loginFormReducer;
