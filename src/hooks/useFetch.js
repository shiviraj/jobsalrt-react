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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};

export default useFetch;
