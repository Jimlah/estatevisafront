import { useContext, useState, useEffect } from "react";
import { AlertContext } from "../../context/AlertContext";
import useFetch from "./../../hooks/useFetch";
import { SearchContext } from "./../../context/SearchContext";
import usePagination from "./../../hooks/usePagination";
import Thead from "./Thead";
import Tbody from "./Tbody";
import PaginationButton from "./../ActionButtons/PaginationButton";
import DeleteConfirmation from "./../notifications/DeleteConfimation";

const Table = ({
  fetcher,
  headings,
  columns,
  view,
  edit,
  destroy,
}) => {
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
    <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-2">
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <Thead headings={headings} />
          <Tbody data={pageData} column={columns} setDeleteId={setDeleteId} />
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
