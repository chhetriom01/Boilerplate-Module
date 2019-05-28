import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blogEditor state domain
 */

const selectBlogEditorDomain = state => state.get('blogEditor', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BlogEditor
 */

const makeSelectBlogEditor = () =>
  createSelector(
    selectBlogEditorDomain,
    substate => substate.toJS(),
  );

export default makeSelectBlogEditor;
export { selectBlogEditorDomain };
