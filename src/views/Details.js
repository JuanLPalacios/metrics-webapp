import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetails } from '../redux/details/details';

export default function Details() {
  const params = useParams();
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getDetails(params.country));
    },
    [params],
  );
  return <div>{details && JSON.stringify(details)}</div>;
}
