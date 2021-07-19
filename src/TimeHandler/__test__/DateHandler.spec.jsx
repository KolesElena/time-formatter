import React from 'react';
import { render, screen } from '@testing-library/react';
import moment from 'moment';
import DateHandler from '../DateHandler';

describe('Date component', () => {
  it('a valid output format should render a valid moment object with exactly the same format', () => {
    const outputFormat = 'MMM, DD YYYY';
    const date = moment();
    render(<DateHandler date={date} outputFormat={outputFormat} />);

    expect(screen.getByText(date.format(outputFormat))).toBeInTheDocument();
  });

  it('dates with props are parsed and rendered in the right way', () => {
    const outputFormat = 'LLLL';
    const inputFormat = 'MMM DD, YYYY';
    const date = 'July 16, 1988';
    const locale = 'es';
    render(
      <DateHandler
        date={date}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        locale={locale}
      />,
    );

    expect(screen.getByText('sábado, 16 de julio de 1988 0:00')).toBeInTheDocument();
  });

  it('global locale does not change on any way if a locale prop is specified', () => {
    const initialLocale = moment.locale();
    const outputFormat = 'LLLL';
    const inputFormat = 'MMM DD, YYYY';
    const date = 'July 16, 1988';
    const locale = 'es';
    render(
      <DateHandler
        date={date}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        locale={locale}
      />,
    );

    expect(moment.locale() === initialLocale).toBe(true);
  });

  it('if input format is specified for a non ISO 8601 compliant date, it is still parsed and rendered correctly', () => {
    render(<DateHandler date="Feb-05-12" inputFormat="MMM DD YY" outputFormat="MMM DD, YYYY" />);

    expect(screen.getByText('Feb 05, 2012')).toBeInTheDocument();
  });

  it('should render a relative date if relative prop is given', () => {
    const relativeOutputFormat = moment()
      .locale('en')
      .fromNow();
    render(<DateHandler relative />);

    expect(screen.getByText(relativeOutputFormat)).toBeInTheDocument();
  });
});
