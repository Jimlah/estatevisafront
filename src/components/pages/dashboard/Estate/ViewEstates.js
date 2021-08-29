import { useContext, useEffect, useState } from "react";
import useFetch from "./../../../../hooks/useFetch";
import { Estate } from "./../../../../services/estate.services";
import { AlertContext } from "./../../../../context/AlertContext";
import Col from "../../../table/Col";
import { SearchContext } from "./../../../../context/SearchContext";
import usePagination from "./../../../../hooks/usePagination";
import PaginationButton from "../../../ActionButtons/PaginationButton";
import DeleteButton from "./../../../ActionButtons/DeleteButton";
import DeleteConfirmation from "../../../notifications/DeleteConfimation";
import Thead from "./../../../table/Thead";
import Tbody from "../../../table/Tbody";
import Logo from "../../../miscellaneous/Logo";
const ViewEstates = () => {
  const { setMessage } = useContext(AlertContext);
  const [paginateData, setPaginateData] = useState([]);
  const { data, error } = useFetch(Estate.getAll);
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

  const headings = ["Logo", "Name", "Code", "Owner", "Actions"];
  const column = [
    (item) => Logo({ url: item.logo }),
    (item) => item.name,
    (item) => item.code,
    (item) => item.user?.profile?.firstname ?? "UnKnown",
    (item) => (
      <DeleteButton
        handleDelete={() => {
          setDeleteId(item.id);
        }}
      />
    ),
  ];

  return (
    <div className="bg-white bg-opacity-75 p-5 dark:bg-opacity-10 rounded-md shadow w-full flex flex-col space-y-2">
      <div className="w-full overflow-x-auto overflow-y-auto h-full font-mono">
        <table className="table-auto w-full relative">
          <Thead headings={headings} />
          <Tbody data={pageData} column={column} />
        </table>
      </div>
      <PaginationButton
        handlePrev={handlePrev}
        handleNext={handleNext}
        currentPage={currentPage}
      />
      <DeleteConfirmation
        funDelete={Estate.destroy}
        id={deleteId}
        setId={setDeleteId}
      />
    </div>
  );
};

export default ViewEstates;
