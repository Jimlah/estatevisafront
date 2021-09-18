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
import TableLoader from "../Loader/TableLoader";
import { PageLoaderContext } from "../../context/PageLoaderContext";
import WrapperPanel from "../Layouts/WrapperPanel";

const Table = ({ fetcher, headings, columns, view, edit, destroy, create }) => {
  const { setMessage } = useContext(AlertContext);
  const [paginateData, setPaginateData] = useState([]);
  const { data, error } = useFetch(fetcher);
  const { setSearchData, result } = useContext(SearchContext);
  const [deleteId, setDeleteId] = useState(null);
  const { tableLoader, setTableLoader } = useContext(PageLoaderContext);

  const { pageData, currentPage, handleNext, handlePrev, setCurrentPage } =
    usePagination(paginateData);

  useEffect(() => {
    setTableLoader(true);
    setCurrentPage(1);
    setTableLoader(false);

    // eslint-disable-next-line
  }, [result, setCurrentPage]);

  useEffect(() => {
    setTableLoader(true);
    setSearchData(data);
    setMessage(error);
    setPaginateData(result);

    setTableLoader(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, setMessage, data, result, currentPage, setSearchData]);

  return (
    <WrapperPanel>
      <div className="flex flex-col w-full p-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between">
          {create && (
            <Link
              to={create}
              className="flex items-center justify-center px-3 py-2 space-x-2 text-sm font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-700"
            >
              <span>
                <AiOutlinePlus />
              </span>
              <span>Add</span>
            </Link>
          )}
          <div className="flex items-center justify-end space-x-3">
            <button className="px-3 py-2 text-xs font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 text-sm font-bold">
              Import
            </button>
            <button className="px-3 py-2 text-xs font-bold text-white bg-red-500 rounded-md hover:bg-red-700 text-sm font-bold">
              Export
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-x-auto overflow-y-auto font-mono">
          <table className="relative w-full table-auto">
            <Thead headings={headings} />
            <Tbody
              data={pageData}
              column={columns}
              setDeleteId={setDeleteId}
              edit={true}
              view={true}
            />
            <TableLoader isLoading={tableLoader} length={headings.length} />
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
    </WrapperPanel>
  );
};

export default Table;
