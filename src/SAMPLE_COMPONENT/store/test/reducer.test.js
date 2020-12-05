import {reducer} from '../reducers';

describe('reducer', () => {
  beforeEach(() => {

  });

  it('should return correctly', () => {
    const actual = reducer({
      documents: null,
      error: null
    }, {type: 'test'});
    expect(actual).toBeDefined();
  });
});
