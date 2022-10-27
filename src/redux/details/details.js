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

export const getDetails = (country, indicatorId) => (dispatch) => {
  dispatch({ type: GET });
  return fetch(`https://api.worldbank.org/v2/country/${country}/indicator/${indicatorId}?per_page=300&format=json`).then(
    (request) => request.json().then(([, data]) => dispatch({
      type: GET_SUCCESS,
      data: data.reverse(),
    })),
    (err) => dispatch({ type: GET_FAILURE, err }),
  );
};
