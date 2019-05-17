import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testimonial state domain
 */

const selectTestimonialDomain = state => state.get('testimonial', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Testimonial
 */

const makeSelectTestimonial = () =>
  createSelector(
    selectTestimonialDomain,
    substate => substate.get('fetchResponse'),
  );

const makeSelectKiran = () =>
  createSelector(
    selectTestimonialDomain,
    substate => substate.get('kiran'),
  );

export default makeSelectTestimonial;
export { makeSelectKiran, selectTestimonialDomain };
