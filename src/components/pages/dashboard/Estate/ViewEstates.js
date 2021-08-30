import { Estate } from "./../../../../services/estate.services";

import Logo from "../../../miscellaneous/Logo";
import Table from "./../../../table/Table";
const ViewEstates = () => {
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
      create={"/dashboard/estates/create"}
    />
  );
};

export default ViewEstates;
