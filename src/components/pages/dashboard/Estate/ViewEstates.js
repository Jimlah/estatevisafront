import { useState } from "react";
import { Estate } from "./../../../../services/estate.services";

import DeleteButton from "./../../../ActionButtons/DeleteButton";

import Logo from "../../../miscellaneous/Logo";
import Table from "./../../../table/Table";
const ViewEstates = () => {
  const [deleteId, setDeleteId] = useState(null);
  // const { setMessage } = useContext(AlertContext);
  // const [paginateData, setPaginateData] = useState([]);
  // const { data, error } = useFetch(Estate.getAll);
  // const { setSearchData, result } = useContext(SearchContext);
  // const [deleteId, setDeleteId] = useState(null);

  // const { pageData, currentPage, handleNext, handlePrev, setCurrentPage } =
  //   usePagination(paginateData);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [result, setCurrentPage]);

  // useEffect(() => {
  //   setSearchData(data);
  //   setMessage(error);
  //   setPaginateData(result);

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [error, setMessage, data, result, currentPage, setSearchData]);

  const headings = ["Logo", "Name", "Code", "Owner", "Actions"];
  const column = [
    (item) => Logo({ url: item.logo }),
    (item) => item.name,
    (item) => item.code,
    (item) => item.user?.profile?.firstname ?? "UnKnown",
  ];

  return (
    <Table
      fetcher={Estate.getAll}
      destroy={Estate.destroy}
      headings={headings}
      columns={column}
    />
  );
};

export default ViewEstates;
