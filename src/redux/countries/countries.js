const LIST = 'metrics-webapp/countries/LIST';
const LIST_SUCCESS = 'metrics-webapp/countries/LIST_SUCCESS';
const LIST_FAILURE = 'metrics-webapp/countries/LIST_FAILURE';
const defaultCountries = {
  countries: [],
  total: 0,
};
export default function reducer(state = defaultCountries, action = {}) {
  switch (action.type) {
    case LIST_SUCCESS: {
      return action.val;
    }
    default:
      return state;
  }
}

export const getCountries = (date = new Date(), indicatorId) => (dispatch) => {
  const year = date.toISOString().substring(0, 4);
  dispatch({ type: LIST });
  return fetch(`https://api.worldbank.org/v2/country/all/indicator/${indicatorId}?date=${year}&per_page=300&format=json`).then(
    (request) => request.json().then(([, list]) => dispatch({
      type: LIST_SUCCESS,
      val: list.error ? defaultCountries : {
        countries: list.slice(49),
        total: list[48].value,
      },
    })),
    (err) => dispatch({ type: LIST_FAILURE, err }),
  );
};
