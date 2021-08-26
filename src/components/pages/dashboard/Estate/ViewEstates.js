import { useContext, useEffect } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { AlertContext } from "./../../../../context/AlertContext";
const ViewEstates = () => {
  const { setMessage } = useContext(AlertContext);
  const { data, loading, error } = useFetch(Estate.getAll);

  useEffect(() => {
    console.log(data);
    setMessage(error);
  }, [error, setMessage, data]);

  return <div>{loading ? <div>Loading</div> : <div>Finished</div>}</div>;
};

export default ViewEstates;
