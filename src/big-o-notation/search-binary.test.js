import { binarySearch } from './search-binary.js';

describe('binary search', () => {
  it('takes [1,2,3,4,5,6] and value 2', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toBe(1);
  });

  it('takes [1,2,3,4,5,6] and value 3', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  });

  it('takes [1,2,3,4,5] and value 5', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it('takes [1,2,3,4,5,6] and value 7', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
  });
});
