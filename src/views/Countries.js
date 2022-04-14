import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';

export default function Countries() {
  const [date, setDate] = useState(new Date());
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getCountries(date));
    },
    [date],
  );
  const a = [
    { date: new Date(date.setDate(date.getDate() - 2)), id: 0 },
    { date: new Date(date.setDate(date.getDate() + 1)), id: 1 },
    { date: new Date(date.setDate(date.getDate() + 1)), id: 2 },
    { date: new Date(date.setDate(date.getDate() + 1)), id: 3 },
    { date: new Date(date.setDate(date.getDate() + 1)), id: 4 },
  ];
  date.setDate(date.getDate() - 2);
  return (
    <div>
      Cities
      <button type="button" onClick={() => setDate(new Date(date.setDate(date.getDate() - 1)))}>prev</button>
      {a.map(({ date, id }) => <button key={id} type="button" onClick={() => setDate(date)}>{date.toISOString().substring(0, 10)}</button>)}
      {date.toISOString().substring(0, 10)}
      <button type="button" onClick={() => setDate(new Date(date.setDate(date.getDate() + 1)))}>next</button>
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
