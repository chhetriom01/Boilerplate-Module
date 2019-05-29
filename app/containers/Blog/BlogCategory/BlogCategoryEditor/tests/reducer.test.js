import { fromJS } from 'immutable';
import blogCategoryEditorReducer from '../reducer';

describe('blogCategoryEditorReducer', () => {
  it('returns the initial state', () => {
    expect(blogCategoryEditorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
