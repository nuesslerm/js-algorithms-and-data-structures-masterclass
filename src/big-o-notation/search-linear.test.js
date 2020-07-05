import { linearSearchForLoop } from './search-linear';

describe('linear search', () => {
  it('takes [1,3,5,6] and value 3, and returns 1 (for loop)', () => {
    expect(linearSearchForLoop([1, 3, 5, 6], 3)).toBe(1);
  });

  it('takes [1,3,5,6] and value 100, and returns -1 (for loop)', () => {
    expect(linearSearchForLoop([1, 3, 5, 6], 100)).toBe(-1);
  });
});
