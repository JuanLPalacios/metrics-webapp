/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import { getDetails } from '../redux/details/details';
import { VALUE_LIST } from '../redux/filter/filter';
import format from '../utils/format';

export default function Details() {
  const params = useParams();
  const {
    details,
    filter: { date, value },
  } = useSelector((state) => state);
  const country = details
    ? Object.values(details.dates[date.toISOString().substring(0, 10)].countries)[0]
    : {
      name: '',
    };
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getDetails(params.country, date));
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
          {country.name}
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
            {format(country[value])}
          </div>
        </div>
      </div>
      <div className="sel-val-name">
        {value.replace(/_/g, ' ')}
      </div>
      <Chart
        source={details && details.dates}
        selector={(x) => Object.values(x.countries)[0][value]}
      />
      {VALUE_LIST.map((value, i) => (
        <div key={`val-${i}`} className="det-value">
          <div className="val-name">
            {value.replace(/_/g, ' ')}
          </div>
          <div className="val-num">
            {details && format(details.total[value])}
          </div>
        </div>
      ))}
    </div>
  );
}
