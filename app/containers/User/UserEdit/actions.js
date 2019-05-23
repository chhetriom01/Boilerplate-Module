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
