const SET_DATE = 'metrics-webapp/date/SET_DATE';
const SET_VALUE = 'metrics-webapp/date/SET_VALUE';
const defaultCountries = { date: new Date(), value: 0 };
export default function reducer(state = defaultCountries, action = {}) {
  switch (action.type) {
    case SET_DATE: {
      return { ...state, date: action.date };
    }
    case SET_VALUE: {
      return { ...state, value: action.value };
    }
    default:
      return state;
  }
}

export const setDate = (date = new Date()) => ({
  type: SET_DATE,
  date,
});

export const setValue = (value = 0) => ({
  type: SET_VALUE,
  value,
});
