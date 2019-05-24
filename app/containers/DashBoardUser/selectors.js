import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashBoardUser state domain
 */

const selectDashBoardUserDomain = state =>
  state.get('dashBoardUser', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashBoardUser
 */

const makeSelectDashBoardUser = () =>
  createSelector(
    selectDashBoardUserDomain,
    substate => substate.toJS(),
  );

export default makeSelectDashBoardUser;
export { selectDashBoardUserDomain };
