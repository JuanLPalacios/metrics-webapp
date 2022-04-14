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

export const getDetails = (country) => (dispatch) => {
  dispatch({ type: GET });
  return fetch(`https://api.covid19tracking.narrativa.com/api/${new Date().toISOString().substring(0, 10)}/country/${country}`).then(
    (request) => request.json().then((data) => dispatch({
      type: GET_SUCCESS,
      data,
    })),
    (err) => dispatch({ type: GET_FAILURE, err }),
  );
};
