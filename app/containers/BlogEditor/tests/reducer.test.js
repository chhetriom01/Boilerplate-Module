import { fromJS } from 'immutable';
import blogEditorReducer from '../reducer';

describe('blogEditorReducer', () => {
  it('returns the initial state', () => {
    expect(blogEditorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
