const SET_DATE = 'metrics-webapp/date/SET_DATE';
const SET_VALUE = 'metrics-webapp/date/SET_VALUE';

export const VALUE_LIST = [
  'today_confirmed',
  'today_deaths',
  'today_new_confirmed',
  'today_new_deaths',
  'today_new_open_cases',
  'today_new_recovered',
  'today_open_cases',
  'today_recovered',
  'today_vs_yesterday_confirmed',
  'today_vs_yesterday_deaths',
  'today_vs_yesterday_open_cases',
  'today_vs_yesterday_recovered',
  'yesterday_confirmed',
  'yesterday_deaths',
  'yesterday_open_cases',
  'yesterday_recovered',
];

const defaultCountries = { date: new Date(), value: VALUE_LIST[0] };
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

export const setValue = (value = VALUE_LIST[0]) => ({
  type: SET_VALUE,
  value,
});
