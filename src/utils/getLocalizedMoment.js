import moment from "moment";

export default (locale) =>
  (time, ...args) =>
    (locale && moment(time, ...args).locale(locale)) || moment(time, ...args);
