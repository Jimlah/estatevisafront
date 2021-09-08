import { useContext, useState, useEffect } from "react";
import { AlertContext } from "../../context/AlertContext";
import useFetch from "./../../hooks/useFetch";
import { SearchContext } from "./../../context/SearchContext";
import usePagination from "./../../hooks/usePagination";
import Thead from "./Thead";
import Tbody from "./Tbody";
import PaginationButton from "./../ActionButtons/PaginationButton";
import DeleteConfirmation from "./../notifications/DeleteConfimation";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Table = ({ fetcher, headings, columns, view, edit, destroy, create }) => {
  const { setMessage } = useContext(AlertContext);
  const [paginateData, setPaginateData] = useState([]);
  const { data, error } = useFetch(fetcher);
  const { setSearchData, result } = useContext(SearchContext);
  const [deleteId, setDeleteId] = useState(null);

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
    <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-3">
      <div className="flex items-center justify-between flex-wrap">
        {create && (
          <Link
            to={create}
            className="px-3 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md font-bold text-sm flex items-center justify-center space-x-2"
          >
            <span>
              <AiOutlinePlus />
            </span>
            <span>New</span>
          </Link>
        )}
        <div className="flex items-center justify-end space-x-3">
          <button className="px-3 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white font-bold text-xs sm:text-sm ">
            Import
          </button>
          <button className="px-3 py-2 bg-red-500 hover:bg-red-700 rounded-md text-white font-bold text-xs sm:text-sm">
            Export
          </button>
        </div>
      </div>
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <Thead headings={headings} />
          <Tbody data={pageData} column={columns} setDeleteId={setDeleteId} edit={true} view={true} />
        </table>
      </div>
      <PaginationButton
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentPage={currentPage}
      />
      <DeleteConfirmation
        funDelete={destroy}
        id={deleteId}
        setId={setDeleteId}
      />
    </div>
  );
};

export default Table;
