import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import cx from "classnames";
import { getLocalizedMoment, reduceMeridiem } from "../utils";

// eslint-disable valid-jsdoc
/**
 * The `<DateHandler />` component allows time displaying and handling using the immense strength of
 * the **moment.js** library. This components accepts different pre-built parameters as `locale`,
 * `outputFormat` and `styles`.
 *
 * For more information, read the official documentation at the
 * [moment.js official site](http://www.momentjs.com/).
 */
// eslint-enable valid-jsdoc
class TimeHandler extends Component {
  static propTypes = {
    /**
     * This input expects a valid ISO time or moment.js instance if no input format is specified.
     */
    time: PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.func,
      PropTypes.string,
    ]),
    /**
     * An input format is highly recommended if the given time is not compliant with the ISO 8601
     * specification.
     */
    inputFormat: PropTypes.string,
    /** The desired output format. */
    outputFormat: PropTypes.string,
    /** The desired locale output. */
    locale: PropTypes.string,
    /** If set, the returned string will be in relative format. E.g.: "a year ago". */
    relative: PropTypes.bool,
    /**
     * Specify another time to compare with the main time. The component will return a
     * `<span>` containig the difference, in hours by defaults.
     */
    diffWith: PropTypes.string,
    /**
     * If you want the difference in units different than hours, you can specify **miliseconds**,
     * **seconds**, **minutes**, **days**, **weeks**, **months** or **years**.
     */
    diffUnits: PropTypes.string,
    /**
     * If the time-to-compare-with is not specified in a correct format, specify it's input format
     * in order to process it correctly.
     */
    diffInputFormat: PropTypes.string,
    /**
     * If set to true, the given time will be parsed in calendar format, for example 'Yesteday at
     * 7pm'
     */
    calendar: PropTypes.bool,
    /**
     * Turns 'am', 'pm', 'AM' or 'PM' into 'a', 'p', 'A' or 'P' respectively. This method is
     * unstable so use with caution only with hour outputs.
     */
    shortMeridiem: PropTypes.bool,
    /** Optional custom className for the generated <span> output. */
    className: PropTypes.string,
    /** An object containig inline styles in JavaScript camelCase format. */
    styles: PropTypes.shape({}),
  };

  static defaultProps = {
    time: moment(),
    inputFormat: undefined,
    outputFormat: undefined,
    locale: undefined,
    diffWith: undefined,
    diffInputFormat: undefined,
    relative: false,
    diffUnits: "hours",
    calendar: undefined,
    className: undefined,
    styles: undefined,
    shortMeridiem: false,
  };

  _formatTime = () => {
    const {
      time,
      inputFormat,
      locale,
      outputFormat,
      relative,
      diffWith,
      diffUnits,
      diffInputFormat,
      calendar,
    } = this.props;
    const localizedMoment = getLocalizedMoment(locale);

    if (relative) return localizedMoment(time, inputFormat).fromNow();
    if (diffWith) {
      return localizedMoment(time).diff(
        localizedMoment(diffWith, diffInputFormat),
        diffUnits
      );
    }
    if (calendar) return localizedMoment(time).calendar();
    return moment().format("LT");
  };

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      styles,
      calendar,
      time,
      outputFormat,
      inputFormat,
      locale,
      relative,
      diffWith,
      diffUnits,
      diffInputFormat,
      shortMeridiem,
      ...rest
    } = this.props;
    /* eslint-enable no-unused-vars */

    const result = this._formatTime();

    return (
      <span className={cx(className, "TimeHandler")} {...rest}>
        {result}
      </span>
    );
  }
}

export default TimeHandler;
