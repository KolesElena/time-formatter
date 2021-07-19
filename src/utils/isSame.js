import moment from 'moment';

export default (dateOne = moment(), dateTwo = moment(), unit = 'day') =>
  moment(dateOne).isSame(moment(dateTwo), unit);
