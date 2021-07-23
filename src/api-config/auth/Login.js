import axios from "axios";
import { setUserSession } from "../../utils/common";
import { useEffect, useState } from "react";

const useLogin = (formData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return;
  setLoading(true);
  axios
    .post("http://127.0.0.1:8000/api/auth/signin", formData)
    .then((response) => {
      setLoading(false);
      console.log();
      setUserSession(response.data);
      setError(null);
      window.location.href = "/";
    })
    .catch((error) => {
      setLoading(false);
      setError(error.response.data.error);
    });

  return { loading, error };
};

export default useLogin;
