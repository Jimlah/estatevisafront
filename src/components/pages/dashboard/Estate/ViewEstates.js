import { useContext, useEffect } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import { SearchContext } from "./../../../../context/SearchContext";
const ViewEstates = () => {
  const { setMessage } = useContext(AlertContext);
  const { data, loading, error } = useFetch(Estate.getAll);
  const { setSearchData, result } = useContext(SearchContext);

  const logo = ({ url }) => {
    return (
      <div
        className="w-7 h-7 rounded-full"
        style={{ backgroundImage: `url('${url}')` }}
      ></div>
    );
  };

  useEffect(() => {
    setSearchData(data);
    setMessage(error);
  }, [error, setMessage, data, result]);

  return (
    <div className="bg-white bg-opacity-75 p-5 dark:bg-gray-900 rounded-md shadow w-full h-[90%]">
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <thead>
            <tr className="border-b  border-gray-500 bg-gray-800 bg-opacity-50 sticky top-0">
              <Col children={"Logo"} head="true" />
              <Col children={"Name"} head="true" />
              <Col children={"Owner"} head="true" />
              <Col children={"Code"} head="true" />
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              result?.map((estate, index) => (
                <tr className="border-b border-gray-500" key={index}>
                  <Col children={logo({ url: estate.logo })} />
                  <Col children={estate.name} />
                  <Col
                    children={estate.user?.profile?.firstname ?? "Unknown"}
                  />
                  <Col children={estate.code} />
                </tr>
              ))
            ) : (
              <tr>
                <td className="" rowSpan="full text-center font-bold text-sm">
                  No data Available yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEstates;
