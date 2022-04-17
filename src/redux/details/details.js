const GET = 'metrics-webapp/books/GET';
const GET_SUCCESS = 'metrics-webapp/books/GET_SUCCESS';
const GET_FAILURE = 'metrics-webapp/books/GET_FAILURE';
const defaultCountry = null;
export default function reducer(state = defaultCountry, action = {}) {
  switch (action.type) {
    case GET: {
      return null;
    }
    case GET_SUCCESS: {
      return action.data;
    }
    default:
      return state;
  }
}

export const getDetails = (country, date) => (dispatch) => {
  dispatch({ type: GET });
  const from = new Date(Math.min(new Date().getTime() - 2592000000, date.getTime() - 1296000000));
  const to = new Date(from.getTime() + 2592000000);
  return fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${from.toISOString().substring(0, 10)}&date_to=${to.toISOString().substring(0, 10)}`).then(
    (request) => request.json().then((data) => dispatch({
      type: GET_SUCCESS,
      data,
    })),
    (err) => dispatch({ type: GET_FAILURE, err }),
  );
};
