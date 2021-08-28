import { useContext, useEffect, useState } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import { SearchContext } from "./../../../../context/SearchContext";
import { Houses } from "../../../../services/houses.services";
import usePagination from "./../../../../hooks/usePagination";
import PaginationButton from "../../../ActionButtons/PaginationButton";
const ViewHouses = () => {
  const { setMessage } = useContext(AlertContext);
  const [paginateData, setPaginateData] = useState([]);
  const { data, error } = useFetch(Houses.getAll);
  const { setSearchData, result } = useContext(SearchContext);

  const { pageData, currentPage, handleNext, handlePrev, setCurrentPage } =
    usePagination(paginateData);

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
    <div className="bg-white bg-opacity-75 p-5 dark:bg-gray-900 rounded-md shadow w-full h-[95%] flex flex-col space-y-2">
      <div>
        <button className="px-3 py-2">Create</button>
      </div>
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <thead>
            <tr className="border-b  border-gray-500 bg-gray-800 bg-opacity-50 sticky top-0">
              <Col children={"Code"} head="true" />
              <Col children={"Estate Name"} head="true" />
              <Col children={"House Type"} head="true" />
              <Col children={"created_at"} head="true" />
            </tr>
          </thead>
          <tbody>
            {pageData ? (
              pageData?.map((house, index) => (
                <tr className="border-b border-gray-500" key={index}>
                  <Col children={house.code} />
                  <Col children={house.estate} />
                  <Col children={house.house_type?.name} />
                  <Col children={house.created_at} />
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

export default ViewHouses;
