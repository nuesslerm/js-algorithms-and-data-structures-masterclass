import { sum, multiply } from '../../arithmetic/arithmetic.methods';

describe('addition and multiplication', () => {
  // test sum
  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
  // test multiply
  it('multiplies 2 + 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
