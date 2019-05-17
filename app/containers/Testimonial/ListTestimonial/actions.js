/*
 *
 * ListTestimonial actions
 *
 */

import * as types from './constants';

export const fetchTestimonialRequest = action(types.FETCH_TESTIMONIAL_REQUEST)
export const fetchTestimonialSuccess = action(types.FETCH_TESTIMONIAL_SUCCESS,"response")
export const fetchTestimonialError = action(types.FETCH_TESTIMONIAL_ERROR,"error")
