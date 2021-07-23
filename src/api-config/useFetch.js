import { useEffect, useRef, useState } from "react";

const useFetch = (url, options) => {
  const isMounted = useRef();
  const [response, setResponse] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log("working");
      if (!url) {
        return;
      }

      setIsLoading(true);

      const fetchData = async function () {
        const response = await fetch(url, options)
          .then((res) => res.json())
          .then((jsonData) => {
            setIsLoading(false);
            setResponse({
              "end-point": url,
              status: 200,
              error: false,
              "data-type": Array.isArray(jsonData) ? "array" : typeof jsonData,
              "data-length": jsonData.length,
              data: jsonData,
            });
          })
          .catch((err) => {
            setIsLoading(false);
            setError({ error: true, message: err });
          });
      };

      console.log("hey");
      fetchData();
    }

    return () => {
      isMounted.current = false;
    };
  }, [url, options]);

  return [response, error, isLoading];
};

export default useFetch;
