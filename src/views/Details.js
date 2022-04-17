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
  console.log(details);
  return (
    <div>
      <header className="App-header">
        <button type="button" onClick={() => window.history.back()}>back</button>
        <div>
          {country.name}
        </div>
        <div />
      </header>
      <div>
        <img src={`images/countries/${country.id}-EPS-01-0001.png`} alt="" />
        <div className="info">
          <h3>
            {country.name}
          </h3>
          <div className="value">
            {country[value]}
          </div>
        </div>
      </div>
      <div className="total">
        {value.replace('_', ' ')}
      </div>
      <Chart
        source={details && details.dates}
        selector={(x) => Object.values(x.countries)[0][value]}
      />
      {VALUE_LIST.map((value, i) => (
        <div key={`val-${i}`}>
          <div className="val-name">
            {value.replace('_', ' ')}
          </div>
          <div className="val-num">
            {details && format(details.total[value])}
          </div>
        </div>
      ))}
    </div>
  );
}
