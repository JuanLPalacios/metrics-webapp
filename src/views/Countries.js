import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';
import { setDate, setValue, VALUE_LIST } from '../redux/filter/filter';

export default function Countries() {
  const {
    countries: { countries, total },
    filter: { date, value },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getCountries(date));
    },
    [date],
  );
  const prevYear = new Date(new Date().setFullYear(date.getFullYear() - 1));
  const nextYear = new Date(new Date().setFullYear(date.getFullYear() + 1));
  const prevMonth = new Date(new Date().setMonth(date.getMonth() - 1));
  const nextMonth = new Date(new Date().setMonth(date.getMonth() + 1));
  const prevDay = new Date(new Date().setDate(date.getDate() - 1));
  const nextDay = new Date(new Date().setDate(date.getDate() + 1));
  const prevValue = VALUE_LIST[
    (VALUE_LIST.indexOf(value) - 1 + VALUE_LIST.length) % VALUE_LIST.length];
  const nextValue = VALUE_LIST[(VALUE_LIST.indexOf(value) + 1) % VALUE_LIST.length];
  return (
    <div>
      <header className="App-header">
        {date.toISOString().substring(0, 10)}
        {' '}
        stats
      </header>
      <section className="banner">
        <time className="date" dateTime={date.toISOString().substring(0, 10)}>
          <div className="val">
            <button type="button" onClick={() => dispatch(setDate(prevYear))}>{prevYear.toISOString().substring(0, 4)}</button>
            <span>
              {date.toISOString().substring(0, 4)}
            </span>
            <button type="button" onClick={() => dispatch(setDate(nextYear))}>{nextYear.toISOString().substring(0, 4)}</button>
          </div>
          <div className="val">
            <button type="button" onClick={() => dispatch(setDate(prevMonth))}>{prevMonth.toISOString().substring(5, 7)}</button>
            <span>
              {date.toISOString().substring(5, 7)}
            </span>
            <button type="button" onClick={() => dispatch(setDate(nextMonth))}>{nextMonth.toISOString().substring(5, 7)}</button>
          </div>
          <div className="val">
            <button type="button" onClick={() => dispatch(setDate(prevDay))}>{prevDay.toISOString().substring(8, 10)}</button>
            <span>
              {date.toISOString().substring(8, 10)}
            </span>
            <button type="button" onClick={() => dispatch(setDate(nextDay))}>{nextDay.toISOString().substring(8, 10)}</button>
          </div>
        </time>
        <div className="total">
          <div className="val">
            <button type="button" onClick={() => dispatch(setValue(prevValue))}>{prevValue.replace('_', ' ')}</button>
            <span>
              {value.replace('_', ' ')}
            </span>
            <button type="button" onClick={() => dispatch(setValue(nextValue))}>{nextValue.replace('_', ' ')}</button>
          </div>
          {total[value]}
        </div>
        <button type="button" onClick={() => dispatch(setDate(nextDay))}>
          <img src="" alt="" />
          next
        </button>
        <button type="button" onClick={() => dispatch(setDate(prevDay))}>
          <img src="" alt="" />
          prev
        </button>
      </section>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Link className="country card" to={`details/${country.id}`}>
              <img src={`images/countries/${country.id}-EPS-01-0001.png`} alt="" />
              <div className="info">
                <h3>
                  {country.name}
                </h3>
                <div className="value">
                  {country[value]}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
