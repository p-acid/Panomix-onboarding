import { useState, useEffect, useReducer } from 'react';

function useFetch(initialUrl, initialData = []) {
  const [url, setUrl] = useState(initialUrl);

  const dataFetchReducer = (state, { type, payload }) => {
    switch (type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

  const [fetchState, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(url);
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };

    fetchUrl();
  }, [url]);

  return [fetchState, setUrl];
}

export { useFetch };
