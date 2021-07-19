### Component

By default, this component renders a `moment()` object:

    <DateHandler />

Component with **custom date** and a custom **output format**:

    <DateHandler date="2013W06" outputFormat="MMMM DD, YYYY" />

If the given date is not compliand with the ISO 8601 specification, an **input format** should be specified in order to parse the date correctly:

    <DateHandler date="Feb-05-12" inputFormat="MMM DD YY" outputFormat="MMM DD, YYYY" />

With **custom locale** and custom **output format**:

    <DateHandler locale="es" outputFormat="LLLL" />

The returned string may be displayed in the moment.js **relative format** by passing the `relative`
parameter to the component:

    <DateHandler date={new Date()} relative />

The relative parameter may be also translated automatically by passing a `locale` property, and
formatted via `localeOptions`:

    <DateHandler date={new Date()} locale="es" relative />

Use the **diffWith** and related parameters to retreive the difference between to dates. By default, the difference will be delivered in hours. Use the **diffUnits** parameter to change that, and the **diffInputFormat** to specify a non-standard difference input date format in case of need.

    <DateHandler date="2017-01-23T09:47:51+01:00" diffWith="2017-01-18T09:47:51+01:00" diffUnits="days" />

The calendar parameter returns the given date in calendar format:

 <DateHandler date="2017-01-19T08:25:15+01:00" calendar />

**Inline styles** may be passed to the `<span>` container via the `style` attribute with a valid
object:

    const myDateHandlerStyle = {
      color: 'white',
      backgroundColor: 'RebeccaPurple',
      padding: 5,
      fontFamily: 'sans-serif',
      fontSize: 12,
      fontWeight: 'bold'
    };

    <DateHandler style={myDateHandlerStyle} />

Inline styled elements may also render dates in relative format:

    const myDateHandlerStyle = {
      color: 'Crimson',
      borderBottom: '2px solid Crimson',
      padding: '0 0 1px 0',
      fontFamily: 'sans-serif',
      fontSize: 12,
      fontWeight: 'bold'
    };

    <DateHandler locale="es" style={myDateHandlerStyle} relative />

Using the **shortMeridiem** prop to turn 'am', 'pm', 'AM' or 'PM' into 'a', 'p', 'A' or 'P' respectively. This method is unstable so use with caution only with hour outputs.

    <DateHandler outputFormat="h:mma" shortMeridiem />

### Methods

This React component exposes a set of public methods and utilities, based on the [Moment.js API](http://momentjs.com/docs/).

#### **getLocalizedMoment()**

Creates a localizated instance of Moment, which does not affect the global Moment scope.

```javascript static
const localizeMoment = getLocalizedMoment('es');
const result = localizeMoment(date);
```

#### **isSame(dateOne, dateTwo, unit)**

Returns `true` if the given dates are in the same time unit: by default is 'day'. Accepts 'milisecond', 'second', 'hour', 'day', 'week', 'month' and 'year'.

```javascript static
isSame('23 Jun 2016', '24 Jun 2016', 'day'); // false;
isSame('23 Jun 2016', '24 Jun 2016', 'week'); // true;
```

#### **getUnitChanges(dateOne, dateTwo, unit, absolute)**

Returns the number of time unit changes between two dates. The default comparison unit is 'days' and accepts 'miliseconds', 'seconds', 'hours', 'days', 'weeks', 'months' and 'years'.

Also accepts the `absolute` boolean parameter, that determines if the returned result may be negative, or always an absolute number.

```javascript static
getUnitChanges('23 Jun 2016 22:00', '24 Jun 2016 01:00', undefined); // -1
getUnitChanges('23 Jun 2016 22:00', '24 Jun 2016 01:00', 'hours'); // -3
getUnitChanges('23 Jun 2016 22:00', '24 Jun 2016 01:00', undefined, true); // 1
getUnitChanges('23 Jun 2016 22:00', '24 Jun 2016 01:00', 'hours', true); // 3
```

For information about the different parameters for **Moment.js**, visit the official site:
http://www.momentjs.com/
