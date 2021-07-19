import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveTimeValue, saveCurrentValue } from "./actions/actions";
import { selectCurrentValue } from "./reducers/reducers";
import moment from "moment";

const App = () => {
  const dispatch = useDispatch();
  const currentValue = useSelector(selectCurrentValue);

  const formatTime = (e) => {
    // return moment("815", "h:mm a");
    /* moment(
      e.target.value,
      [
        "h",
        "ha",
        "hA",
        "hmm",
        "hmma",
        "hmmA",
        "hh",
        "hha",
        "hhA",
        "hhmm",
        "hhmma",
        "hhmmA",
        "h a",
        "h A",
        "h mm",
        "h mm a",
        "h mm A",
        "hh a",
        "hh A",
        "hh mm",
        "hh mm a",
        "hh mm A",
        "h:a",
        "h:A",
        "h:mm",
        "h:mm:a",
        "h:mm:A",
        "h:mma",
        "h:mmA",
        "hh:a",
        "hh:A",
        "hh:mm",
        "hh:mm:a",
        "hh:mm:A",
        "hh:mma",
        "hh:mmA",
        "H",
        "Ha",
        "HA",
        "Hmm",
        "Hmma",
        "HmmA",
        "HH",
        "HHa",
        "HHA",
        "HHmm",
        "HHmma",
        "HHmmA",
        "H a",
        "H A",
        "H mm",
        "H mm a",
        "H mm A",
        "HH a",
        "HH A",
        "HH mm",
        "HH mm a",
        "HH mm A",
        "H:a",
        "H:A",
        "H:mm",
        "H:mm:a",
        "H:mm:A",
        "HH:a",
        "HH:A",
        "HH:mm",
        "HH:mm:a",
        "HH:mm:A",
      ],
      true
    ).isValid(); */
    const target = e.target.value;
    console.log(target);
    const saveTime = target
      ? moment(
          target,
          [
            "h",
            "ha",
            "hA",
            "hmm",
            "hmma",
            "hmmA",
            "hh",
            "hha",
            "hhA",
            "hhmm",
            "hhmma",
            "hhmmA",
            "h a",
            "h A",
            "h mm",
            "h mm a",
            "h mm A",
            "hh a",
            "hh A",
            "hh mm",
            "hh mm a",
            "hh mm A",
            "h:a",
            "h:A",
            "h:mm",
            "h:mm:a",
            "h:mm:A",
            "h:mma",
            "h:mmA",
            "hh:a",
            "hh:A",
            "hh:mm",
            "hh:mm:a",
            "hh:mm:A",
            "hh:mma",
            "hh:mmA",
            "H",
            "Ha",
            "HA",
            "Hmm",
            "Hmma",
            "HmmA",
            "HH",
            "HHa",
            "HHA",
            "HHmm",
            "HHmma",
            "HHmmA",
            "H a",
            "H A",
            "H mm",
            "H mm a",
            "H mm A",
            "HH a",
            "HH A",
            "HH mm",
            "HH mm a",
            "HH mm A",
            "H:a",
            "H:A",
            "H:mm",
            "H:mm:a",
            "H:mm:A",
            "HH:a",
            "HH:A",
            "HH:mm",
            "HH:mm:a",
            "HH:mm:A",
          ],
          true
        ).format("HH:mm")
      : null;

    dispatch(saveTimeValue(saveTime));
    dispatch(saveCurrentValue(saveTime));
  };

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(saveCurrentValue(value));
  };

  return (
    <div>
      <input
        value={currentValue}
        onBlur={formatTime}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default App;
