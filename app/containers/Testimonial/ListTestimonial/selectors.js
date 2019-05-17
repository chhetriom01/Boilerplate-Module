import { createSelector } from 'reselect'
import { initialState } from './reducer';

/**
 * Direct selector to the listTestimonial state domain
 */

const selectListTestimonialDomain = state =>
  state.get('listTestimonial', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListTestimonial
 */

const makeSelectListTestimonial = () =>
  createSelector(
    selectListTestimonialDomain,
    substate => substate.toJS(),
  );

export default makeSelectListTestimonial;
export { selectListTestimonialDomain };
