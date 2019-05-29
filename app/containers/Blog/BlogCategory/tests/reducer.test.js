import { fromJS } from 'immutable';
import blogCategoryReducer from '../reducer';

describe('blogCategoryReducer', () => {
  it('returns the initial state', () => {
    expect(blogCategoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
