import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testimonialEdit state domain
 */

const selectTestimonialEditDomain = state =>
  state.get('testimonialEdit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestimonialEdit
 */

const makeSelectTestimonialEdit = () =>
  createSelector(
    selectTestimonialEditDomain,
    substate => substate.toJS(),
  );

const makeGetDatById = () =>
createSelector(
  selectTestimonialEditDomain,
  substate => substate.get("getTestimonialByIdResponse")
)

export default makeSelectTestimonialEdit;
export { selectTestimonialEditDomain,makeGetDatById };
