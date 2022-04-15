import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';

export default function Countries() {
  const [date, setDate] = useState(new Date());
  let temp;
  // eslint-disable-next-line no-multi-assign
  const { countries, total } = temp = useSelector((state) => state.countries);
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
  console.log(temp);
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
            <button type="button" onClick={() => setDate(prevYear)}>{prevYear.toISOString().substring(0, 4)}</button>
            <span>
              {date.toISOString().substring(0, 4)}
            </span>
            <button type="button" onClick={() => setDate(nextYear)}>{nextYear.toISOString().substring(0, 4)}</button>
          </div>
          <div className="val">
            <button type="button" onClick={() => setDate(prevMonth)}>{prevMonth.toISOString().substring(5, 7)}</button>
            <span>
              {date.toISOString().substring(5, 7)}
            </span>
            <button type="button" onClick={() => setDate(nextMonth)}>{nextMonth.toISOString().substring(5, 7)}</button>
          </div>
          <div className="val">
            <button type="button" onClick={() => setDate(prevDay)}>{prevDay.toISOString().substring(8, 10)}</button>
            <span>
              {date.toISOString().substring(8, 10)}
            </span>
            <button type="button" onClick={() => setDate(nextDay)}>{nextDay.toISOString().substring(8, 10)}</button>
          </div>
        </time>
        <div>{total.today_new_confirmed}</div>
        <button type="button" onClick={() => setDate(nextDay)}>
          <img src="" alt="" />
          next
        </button>
        <button type="button" onClick={() => setDate(prevDay)}>
          <img src="" alt="" />
          prev
        </button>
      </section>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Link to={`details/${country.id}`}>{country.name}</Link>
            {' '}
            {country.today_new_confirmed}
          </li>
        ))}
      </ul>
    </div>
  );
}
