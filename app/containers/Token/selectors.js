import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the token state domain
 */

const selectTokenDomain = state => state.get('token', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Token
 */

const makeSelectToken = () =>
  createSelector(
    selectTokenDomain,
    substate => substate.toJS(),
  );

export default makeSelectToken;
export { selectTokenDomain };
