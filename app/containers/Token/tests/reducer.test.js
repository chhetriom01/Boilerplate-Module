import { fromJS } from 'immutable';
import tokenReducer from '../reducer';

describe('tokenReducer', () => {
  it('returns the initial state', () => {
    expect(tokenReducer(undefined, {})).toEqual(fromJS({}));
  });
});
