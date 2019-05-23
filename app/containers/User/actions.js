/*
 *
 * User actions
 *
 */

import * as types from './constants';
import action from 'utils/action';

export const getUserDataRequest = action(types.GET_USER_DATA_REQUEST);
export const getUserDataSuccess = action(types.GET_USER_DATA_SUCCESS,"response");
export const getUserDataError = action(types.GET_USER_DATA_ERROR,"error");
