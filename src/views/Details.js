/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import { getDetails } from '../redux/details/details';
import format from '../utils/format';

export default function Details() {
  const params = useParams();
  const {
    details,
    filter: { value },
  } = useSelector((state) => state);
  const country = details
    ? details[0].country
    : {
      value: '',
    };
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getDetails(params.country, value));
    },
    [params],
  );
  return (
    <div>
      <header className="App-header">
        <button className="prev" type="button" onClick={() => window.history.back()}>
          <img src="./images/left-arrow.svg" alt="" />
        </button>
        <div>
          {country.value}
        </div>
        <div />
      </header>
      <div className="info">
        <img src={`images/countries/${country.id}-EPS-01-0001.png`} alt="" />
        <div>
          <h3>
            {country.name}
          </h3>
          <div className="value">
            {format(details ? details[0]?.value : 0)}
          </div>
        </div>
      </div>
      <div className="sel-val-name">
        {value.replace(/_/g, ' ')}
      </div>
      <Chart
        source={details || []}
        selector={(x) => x.value}
      />
      {details && details.map((value, i) => (
        <div key={`val-${i}`} className="det-value">
          <div className="val-name">
            {value.date}
          </div>
          <div className="val-num">
            {value && format(value.value)}
          </div>
        </div>
      ))}
    </div>
  );
}
