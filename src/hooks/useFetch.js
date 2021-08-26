import { useEffect, useState } from "react";

const useFetch = (func, id = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    setLoading(true);
    setData(null);
    setError(null);

    const res = await func(id);

    console.log(res);

    setLoading(false);

    return () => {
      setLoading(false);
      setData(null);
    };
  }, [func, id]);

  return { data, loading, error };
};

export default useFetch;
