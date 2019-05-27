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


export const patchUserDataRequest = action(types.PATCH_USER_DATA_REQUEST,'id');
export const patchUserDataSuccess = action(types.PATCH_USER_DATA_SUCCESS,"response");
export const patchUserDataError = action(types.PATCH_USER_DATA_ERROR,"error");