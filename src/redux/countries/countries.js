const LIST = 'metrics-webapp/countries/LIST';
const LIST_SUCCESS = 'metrics-webapp/countries/LIST_SUCCESS';
const LIST_FAILURE = 'metrics-webapp/countries/LIST_FAILURE';
const defaultCountries = [];
export default function reducer(state = defaultCountries, action = {}) {
  switch (action.type) {
    case LIST_SUCCESS: {
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
      list: Object.values(list.dates[day].countries),
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};
