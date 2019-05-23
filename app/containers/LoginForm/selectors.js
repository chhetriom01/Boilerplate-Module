import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginForm state domain
 */

const selectLoginFormDomain = state => state.get('loginForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginForm
 */

const makeSelectLoginForm = () =>
  createSelector(
    selectLoginFormDomain,
    substate => substate.toJS(),
  );

  const makeSelectUserRole = () =>
  createSelector(
    selectLoginFormDomain,
    substate => substate.get('loginResponse')
  );

  const makeSelectErrorMessage =() =>
  createSelector(
    selectLoginFormDomain,
    substate => substate.get('error')
  )

export default makeSelectLoginForm;
export { selectLoginFormDomain ,makeSelectUserRole,makeSelectErrorMessage};
