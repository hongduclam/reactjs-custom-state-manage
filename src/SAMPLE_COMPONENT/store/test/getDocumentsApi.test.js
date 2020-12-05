import getDocumentsApi from '../getDocumentsApi';

describe('getDocumentsApi', () => {
  beforeEach(() => {

  });

  it('should return correctly', () => {
    const actual = getDocumentsApi();
    expect(actual).toBeDefined();
  });
});
