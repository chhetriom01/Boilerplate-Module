/*
 *
 * UserEdit actions
 *
 */

import * as types from './constants';
import action from "utils/action";

export const postUserDataRequest = action(types.POST_USER_DATA_REQUEST,"data");
export const postUserDataSuccess = action(types.POST_USER_DATA_SUCCESS,"response");
export const postUserDataError = action(types.POST_USER_DATA_ERROR,"error")

export const getUserDataByIdRequest = action(types.GET_USER_DATA_BY_ID_REQUEST,"id");
export const getUserDataByIdSuccess = action(types.GET_USER_DATA_BY_ID_SUCCESS,"response");
export const getUserDataByIdError = action(types.GET_USER_DATA_BY_ID_ERROR,"error");

export const putUserDataByIdRequest = action(types.PUT_USER_DATA_BY_ID_REQUEST,"data",'id');
export const putUserDataByIdSuccess = action(types.PUT_USER_DATA_BY_ID_SUCCESS,"response");
export const putUserDataByIdError = action(types.PUT_USER_DATA_BY_ID_ERROR,"error");
