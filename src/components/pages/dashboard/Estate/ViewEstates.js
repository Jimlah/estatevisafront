import { Estate } from "./../../../../services/estate.services";
import Logo from "../../../miscellaneous/Logo";
import Table from "./../../../table/Table";

const ViewEstates = () => {
  const headings = ["Name", "Code", "Owner", "Created At", "Actions"];

  const NameLogo = (name, url) => {
    return (
      <div className="flex items-center justify-start space-x-2 font-semibold">
        <Logo url={url} />
        <span>{name}</span>
      </div>
    );
  };

  const column = [
    (item) => NameLogo(item.name, item.logo),
    (item) => item.code,
    (item) => item.user?.profile?.firstname ?? "UnKnown",
    (item) => item.created_at,
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
