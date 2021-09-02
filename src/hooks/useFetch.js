import { useEffect, useState } from "react";

const useFetch = (func = () => {}, id = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    async function fetchData() {
      const res = await func(id);

      if (res?.data) {
        setData(res.data);
      }

      if (res.message) {
        setError(res.message);
      }

      setLoading(false);
    }

    fetchData();

    return () => {
      setLoading(false);
      setData(null);
    };
  }, [func, id]);

  return { data, loading, error };
};

export default useFetch;
