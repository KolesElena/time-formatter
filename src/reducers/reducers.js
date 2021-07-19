const initialState = {
  value: [],
  currentValue: "",
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TIME_VALUE":
      return { ...state, value: [...state.value, action.payload] };
    case "SAVE_CURRENT_VALUE":
      return { ...state, currentValue: action.payload };
    default:
      return state;
  }
};

export const selectTime = (state) => state.value[state.value.length - 1];
export const selectCurrentValue = (state) => state.currentValue;
