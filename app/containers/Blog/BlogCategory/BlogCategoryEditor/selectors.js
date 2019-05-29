import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogCategoryEditor state domain
 */

const selectBlogCategoryEditorDomain = state =>
  state.get('blogCategoryEditor', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogCategoryEditor
 */

const makeSelectBlogCategoryEditor = () =>
  createSelector(
    selectBlogCategoryEditorDomain,
    substate => substate.toJS(),
  );

export default makeSelectBlogCategoryEditor;
export { selectBlogCategoryEditorDomain };
