import { Houses } from "../../../../services/houses.services";
import Table from "./../../../table/Table";
const ViewHouses = () => {
  const headings = [
    "Code",
    "Estate Name",
    "House Type",
    "Created At",
    "Action",
  ];
  const columns = [
    (item) => item.code,
    (item) => item.estate ?? "Unknown",
    (item) => item.house_type?.name,
    (item) => item.created_at,
  ];

  return (
    <Table
      fetcher={Houses.getAll}
      headings={headings}
      columns={columns}
      destroy={Houses.destroy}
    />
  );
};

export default ViewHouses;
