import { fromJS } from 'immutable';
import testimonialEditReducer from '../reducer';

describe('testimonialEditReducer', () => {
  it('returns the initial state', () => {
    expect(testimonialEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});
