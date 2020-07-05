import { naiveStringSearch } from './search-naive-string';

describe('naive string search', () => {
  it('takes wowomgzomg with omg', () => {
    expect(naiveStringSearch('wowomgzomgomg', 'omg')).toBe(3);
  });

  it('takes wowomgzomg with pap', () => {
    expect(naiveStringSearch('wowomgzomgomg', 'pap')).toBe(0);
  });
});
