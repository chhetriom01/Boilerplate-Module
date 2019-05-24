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
  error : ''
});

function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case type.SUBMIT_INFO_REQUEST:

      return state.merge({
        loading: true,
      });

    case type.SUBMIT_INFO_SUCCESS:
      // const {token ,userInfo:{userRole}} = action.response;
      localStorage.setItem('token', action.response.token);
      return state.merge({
        loading: false,
        loginResponse: action.response.userInfo.userRole,
      });
    case type.SUBMIT_INFO_ERROR:
       console.log(action.error.message)
      return state.merge({
        loading: false,
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default loginFormReducer;
