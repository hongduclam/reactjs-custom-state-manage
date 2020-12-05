import apis from '../getDocumentsApi';

describe('getDocumentsApi', () => {
  beforeEach(() => {

  });

  it('should return correctly', () => {
    const actual = apis();
    expect(actual).toBeDefined();
  });
});
