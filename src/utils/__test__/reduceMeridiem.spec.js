import reduceMeridiem from '../reduceMeridiem';

describe('reduceMeridiem', () => {
  it('returns 8a if 8am is given', () => {
    expect(reduceMeridiem('8am')).not.toBe('8am');
    expect(reduceMeridiem('8am')).toBe('8a');
  });
  it('returns 7p if 7pm is given', () => {
    expect(reduceMeridiem('7pm')).not.toBe('7pm');
    expect(reduceMeridiem('7pm')).toBe('7p');
  });
  it("if given input does not match the pattern, it's returned unchanged", () => {
    expect(reduceMeridiem('iDontMatch')).toBe('iDontMatch');
  });
  it('returns an empty string by default', () => {
    expect(reduceMeridiem()).toBe('');
  });
});
