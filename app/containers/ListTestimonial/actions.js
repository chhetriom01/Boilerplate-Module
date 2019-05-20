/*
 *
 * ListTestimonial actions
 *
 */

import * as types from './constants';
import action from "../../utils/action"

export const fetchTestimonialRequest = action(types.FETCH_TESTIMONIAL_REQUEST);
export const fetchTestimonialSuccess = action(types.FETCH_TESTIMONIAL_SUCCESS,"response");
export const fetchTestimonialError = action(types.FETCH_TESTIMONIAL_ERROR,"error");

export const patchTestimonialRequest = action(types.PATCH_TESTIMONIAL_REQUEST,'id');
export const patchTestimonialSuccess = action(types.PATCH_TESTIMONIAL_SUCCESS,"response");
export const patchTestimonialError = action(types.PATCH_TESTIMONIAL_ERROR,"error")