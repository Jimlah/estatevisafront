import { useContext, useEffect, useState } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import { SearchContext } from "./../../../../context/SearchContext";
import usePagination from "./../../../../hooks/usePagination";
import PaginationButton from "../../../ActionButtons/PaginationButton";
const ViewEstates = () => {
  const { setMessage } = useContext(AlertContext);
  const [paginateData, setPaginateData] = useState([]);
  const { data, error } = useFetch(Estate.getAll);
  const { setSearchData, result } = useContext(SearchContext);

  const { pageData, currentPage, handleNext, handlePrev, setCurrentPage } =
    usePagination(paginateData);

  const logo = ({ url }) => {
    return (
      <div
        className="w-6 h-6 rounded-full"
        style={{ backgroundImage: `url('${url}')` }}
      ></div>
    );
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [result, setCurrentPage]);

  useEffect(() => {
    setSearchData(data);
    setMessage(error);
    setPaginateData(result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, setMessage, data, result, currentPage, setSearchData]);

  return (
    <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-2">
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <thead>
            <tr className="border-b font-bold border-gray-500 bg-gray-200 dark:bg-gray-800 sticky top-0 text-gray-900 dark:text-gray-100">
              <Col children={"Logo"} head="true" />
              <Col children={"Name"} head="true" />
              <Col children={"Owner"} head="true" />
              <Col children={"Code"} head="true" />
            </tr>
          </thead>
          <tbody>
            {pageData ? (
              pageData?.map((estate, index) => (
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
      <PaginationButton
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ViewEstates;
