import moment from 'moment';
import getUnitChanges from '../getUnitChanges';
import isSame from '../isSame';

jest.mock('moment');
jest.mock('../isSame');

describe('getUnitChanges', () => {
  const aString = 'a string';
  const noOp = () => {};

  it('returns 0 if both given dates are identical', () => {
    isSame.mockImplementation(() => true);

    const result = getUnitChanges(noOp, noOp, aString, false);
    expect(result).toBe(0);
  });

  it("returns the difference between the given dates if they aren't identical", () => {
    isSame.mockImplementation(() => false);
    moment.mockImplementation(() => ({ diff: () => 2 }));

    const result = getUnitChanges(noOp, noOp, aString, false);
    expect(result).toBe(2);
  });

  it("returns 1 if dates aren't identical but moment.diff returns 0 and absolute is true", () => {
    isSame.mockImplementation(() => false);
    moment.mockImplementation(() => ({ diff: () => 0 }));

    const result = getUnitChanges(noOp, noOp, aString, true);
    expect(result).toBe(1);
  });

  it("returns -1 if dates aren't identical but moment.diff returns 0 and absolute is false", () => {
    isSame.mockImplementation(() => false);
    moment.mockImplementation(() => ({ diff: () => 0 }));
    const result = getUnitChanges(noOp, noOp, aString, false);
    expect(result).toBe(-1);
  });

  it('if dates are not identical, returns the difference in absolute number if absolute is true', () => {
    isSame.mockImplementation(() => false);
    moment.mockImplementation(() => ({ diff: () => -3 }));
    const result = getUnitChanges(noOp, noOp, aString, true);
    expect(result).toBe(3);
  });

  it('if dates are not identical, returns the real difference if absolute is false', () => {
    isSame.mockImplementation(() => false);
    moment.mockImplementation(() => ({ diff: () => -3 }));
    const result = getUnitChanges(noOp, noOp, aString, false);
    expect(result).toBe(-3);
  });

  it('isSame method properly receives dateOne, dateTwo and units parameters', () => {
    isSame.mockImplementation(jest.fn());
    getUnitChanges(noOp, noOp, aString);
    expect(isSame).toBeCalledWith(noOp, noOp, aString);
  });

  it('default properties are passed to isSame if they are not externally specified', () => {
    isSame.mockImplementation(jest.fn(() => true));
    moment.mockImplementation(() => 'moment');
    getUnitChanges(undefined, undefined, 'years');
    expect(isSame).toHaveBeenCalledWith('moment', 'moment', 'years');
  });

  it('if dates are not identical, moment and moment.diff receive the correct params', () => {
    isSame.mockImplementation(() => false);
    const mockedDiff = jest.fn();
    moment.mockImplementation(jest.fn(() => ({ diff: mockedDiff })));
    getUnitChanges('dateOne', 'dateTwo', undefined);
    expect(moment).toHaveBeenCalledWith('dateOne');
    expect(mockedDiff).toHaveBeenCalledWith('dateTwo', 'days');
  });
});
