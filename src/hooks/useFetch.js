import { useState, useEffect } from 'react';
import fetchApi from '../api/fetchApi';

const useFetch = (payload, setResult) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchApi(payload)
      .then((result) => {
        setResult(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return isLoading;
};

export default useFetch;
