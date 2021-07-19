import moment from 'moment';
import isSame from './isSame';

export default (dateOne = moment(), dateTwo = moment(), unit = 'days', absolute = false) => {
  if (!isSame(dateOne, dateTwo, unit)) {
    const result = moment(dateOne).diff(dateTwo, unit);

    if (result === 0) {
      if (absolute) return 1;
      return -1;
    }

    if (absolute) return Math.abs(result);
    return result;
  }

  return 0;
};
