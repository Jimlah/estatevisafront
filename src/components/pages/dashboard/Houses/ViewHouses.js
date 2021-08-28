import { useContext, useEffect, useState } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import { SearchContext } from "./../../../../context/SearchContext";
import { Houses } from "../../../../services/houses.services";
import usePagination from "./../../../../hooks/usePagination";
import PaginationButton from "../../../ActionButtons/PaginationButton";
import CreateButton from "../../../ActionButtons/CreateButton";
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
    <div className="bg-opacity-50 px-5 py-2.5 bg-white dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-2 justify-start">
      <div>
        <CreateButton />
      </div>
      <div className="w-full overflow-x-auto font-mono">
        <table className="table-auto w-full relative">
          <thead>
            <tr className="border-b font-bold  border-gray-500 bg-gray-200 dark:bg-gray-800 sticky top-0">
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
