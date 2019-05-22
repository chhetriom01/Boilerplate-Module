import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userEdit state domain
 */

const selectUserEditDomain = state => state.get('userEdit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserEdit
 */

const makeSelectUserEdit = () =>
  createSelector(
    selectUserEditDomain,
    substate => substate.toJS(),
  );

export default makeSelectUserEdit;
export { selectUserEditDomain };
