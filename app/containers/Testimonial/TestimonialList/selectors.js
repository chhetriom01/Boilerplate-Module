import { createSelector } from 'reselect';
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
  const makeSelectTestimonial =() =>
  createSelector(
    selectListTestimonialDomain,
    substate => substate.get("fetchResponse")
  );

  const makePatchTestimonial= () => 
  createSelector(
    selectListTestimonialDomain,
    substate => substate.get("patchResponse")
  )

export default makeSelectListTestimonial;
export { selectListTestimonialDomain,makeSelectTestimonial,makePatchTestimonial };
