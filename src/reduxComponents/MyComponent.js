import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch({ type: 'FETCH_REQUEST', payload: { url: "https://api.example.com/data" } });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return <p>Data: {JSON.stringify(data)}</p>;
  }

  return <p>Loading...</p>;
};

export default MyComponent;
