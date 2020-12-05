import {applyMiddleware} from '../middleware';

describe('middleware', () => {
  beforeEach(() => {

  });

  it('should return correctly', () => {
    const actual = applyMiddleware();
    expect(actual).toBeDefined();
  });
});
