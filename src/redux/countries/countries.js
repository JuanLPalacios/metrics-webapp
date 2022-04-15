const LIST = 'metrics-webapp/countries/LIST';
const LIST_SUCCESS = 'metrics-webapp/countries/LIST_SUCCESS';
const LIST_FAILURE = 'metrics-webapp/countries/LIST_FAILURE';
const defaultCountries = {
  countries: [],
  total: {
    today_confirmed: 0,
    today_deaths: 0,
    today_new_confirmed: 0,
    today_new_deaths: 0,
    today_new_open_cases: 0,
    today_new_recovered: 0,
    today_open_cases: 0,
    today_recovered: 0,
    today_vs_yesterday_confirmed: 0,
    today_vs_yesterday_deaths: 0,
    today_vs_yesterday_open_cases: 0,
    today_vs_yesterday_recovered: 0,
    yesterday_confirmed: 0,
    yesterday_deaths: 0,
    yesterday_open_cases: 0,
    yesterday_recovered: 0,
  },
};
export default function reducer(state = defaultCountries, action = {}) {
  switch (action.type) {
    case LIST_SUCCESS: {
      return action.val;
    }
    case LIST_FAILURE: {
      console.error(action.err);
      return [...action.list];
    }
    default:
      return state;
  }
}

export const getCountries = (date = new Date()) => (dispatch) => {
  const day = date.toISOString().substring(0, 10);
  dispatch({ type: LIST });
  return fetch(`https://api.covid19tracking.narrativa.com/api/${day}`).then(
    (request) => request.json().then((list) => dispatch({
      type: LIST_SUCCESS,
      val: list.error ? defaultCountries : {
        countries: Object.values(list.dates[day].countries),
        total: list.total,
      },
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};
