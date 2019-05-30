import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { createECDH } from 'crypto';

/**
 * Direct selector to the blogCategory state domain
 */

const selectBlogCategoryDomain = state =>
  state.get('blogCategory', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogCategory
 */

const makeSelectBlogCategory = () =>
  createSelector(
    selectBlogCategoryDomain,
    substate => substate.toJS(),
  );

const createSelectGetBlogCategory = () =>
  createSelector(
    selectBlogCategoryDomain,
    substate => substate.get('getResponse'),
  );

export default makeSelectBlogCategory;
export { selectBlogCategoryDomain, createSelectGetBlogCategory };
