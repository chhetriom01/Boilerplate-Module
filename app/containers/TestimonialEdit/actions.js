/*
 *
 * TestimonialEdit actions
 *
 */

import * as types from './constants';
import action from 'utils/action';

export const getTestimonialByIdRequest = action(types.GET_DATA_BY_ID_REQUEST,"id");
export const getTestimonialByIdSuccess = action(types.GET_DATA_BY_ID_SUCCESS,"response");
export const getTestimonialByIdError = action(types.GET_DATA_BY_ID_ERROR,"error");

export const putTestimonialByIdRequest = action(types.PUT_DATA_BY_ID_REQUEST,"data","id");
export const putTestimonialByIdSuccess = action(types.PUT_DATA_BY_ID_SUCCESS,"response");
export const putTestimonialByIdError = action(types.PUT_DATA_BY_ID_ERROR);