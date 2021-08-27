import { useContext, useEffect, useRef } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import Row from "./../../../table/Row";
const ViewEstates = () => {
  const { setMessage } = useContext(AlertContext);
  const { data, loading, error } = useFetch(Estate.getAll);

  useEffect(() => {
    console.log(data);
    setMessage(error);
  }, [error, setMessage, data]);

  const tableTile = ["Name", "Price", "Size"];

  return (
    <div className="bg-white bg-opacity-75 p-5 dark:bg-gray-900 rounded-md shadow w-full">
      <table className="table-auto w-full">
        <Row children={tableTile} head="true" />
        <tr className="border-b  border-gray-500">
          <Col children={"hey"} head="true" />
          <Col children={"hey"} head="true" />
          <Col children={"hey"} head="true" />
        </tr>
        <tr className="border-b border-gray-500">
          <Col children={"hey"} />
          <Col children={"hey"} />
          <Col children={"hey"} />
        </tr>
      </table>
    </div>
  );
};

export default ViewEstates;
