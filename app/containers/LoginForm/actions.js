/*
 *
 * LoginForm actions
 *
 */

import * as type from './constants';
import action from '../../utils/action'

export const submitLoginInfoRequest = action(type.SUBMIT_INFO_REQUEST,'data');
export const submitLoginInfoSuccess = action(type.SUBMIT_INFO_SUCCESS,'response');
export const submitLoginInfoError = action(type.SUBMIT_INFO_ERROR,'error');
