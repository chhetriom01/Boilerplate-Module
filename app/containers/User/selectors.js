import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the user state domain
 */

const selectUserDomain = state => state.get('user', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by User
 */

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate.toJS(),
  );

const makeSelectGetResponse = () =>
  createSelector(
    selectUserDomain,
    substate => substate.get('getResponse'),
  );

const makePatchResponse = () =>
  createSelector(
    selectUserDomain,
    substate => substate.get('patchResponse'),
  );

export { makeSelectUser, makeSelectGetResponse,makePatchResponse };
