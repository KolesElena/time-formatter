import moment from 'moment';
import isSame from '../isSame';

jest.mock('moment');

describe('isSame', () => {
  it('manages the received arguments', () => {
    const _isSame = jest.fn();
    moment.mockImplementation(jest.fn(() => ({ isSame: _isSame })));
    isSame('dateOne', 'dateTwo', 'days');
    expect(moment).toHaveBeenCalledWith('dateOne');
    expect(_isSame).toHaveBeenCalledWith(moment(), 'days');
    expect(moment).toHaveBeenCalledWith('dateTwo');
  });

  it('applies default argument values', () => {
    const _isSame = jest.fn();
    moment.mockImplementation(jest.fn(() => ({ isSame: _isSame })));
    isSame();
    expect(moment).toHaveBeenCalledWith(moment());
    expect(_isSame).toHaveBeenCalledWith(moment(), 'day');
  });
});
