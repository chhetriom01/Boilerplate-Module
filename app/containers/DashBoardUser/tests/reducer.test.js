import { fromJS } from 'immutable';
import dashBoardUserReducer from '../reducer';

describe('dashBoardUserReducer', () => {
  it('returns the initial state', () => {
    expect(dashBoardUserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
