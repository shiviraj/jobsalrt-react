import React, { useState, useEffect } from 'react';
import Loader from '../includes/Loader';
import fetchApi from '../../api/fetchApi';

const Location = () => {
  const [locations, setLocations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi({ type: 'GET_LOCATIONS' })
      .then((result) => {
        setLocations(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  });

  if (isLoading) return <Loader />;
  return (
    <div>
      {locations.map((location) => {
        return <div>{location}</div>;
      })}
    </div>
  );
};

export default Location;
