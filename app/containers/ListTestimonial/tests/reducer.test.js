import { fromJS } from 'immutable';
import listTestimonialReducer from '../reducer';

describe('listTestimonialReducer', () => {
  it('returns the initial state', () => {
    expect(listTestimonialReducer(undefined, {})).toEqual(fromJS({}));
  });
});
