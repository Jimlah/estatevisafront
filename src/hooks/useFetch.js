import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    // return () => {
    //   setData(null);
    //   setError(null);
    // };
  }, [url]);

  return [data, error];
};

export default useFetch;
