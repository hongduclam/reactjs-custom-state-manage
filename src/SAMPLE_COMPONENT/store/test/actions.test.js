import {useActions} from '../actions';

describe('useActions', () => {
  beforeEach(() => {

  });

  it('should return correctly', () => {
    const actual = useActions({}, () => true);
    expect(actual).toHaveProperty('getDocuments');
  });
});
