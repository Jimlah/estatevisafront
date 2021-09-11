import Logo from "../../../miscellaneous/Logo";
import Table from "./../../../table/Table";
import { Estate } from "./../../../../services/estate.services";

const ViewEstates = () => {
  const headings = ["Name", "Code", "Owner", "Status", "Created At", "Actions"];

  const NameLogo = (name, url) => {
    return (
      <div className="flex items-center justify-start space-x-2 font-semibold">
        <Logo url={url} />
        <span>{name}</span>
      </div>
    );
  };

  const status = (status) => {
    let bgStyle = "bg-green-500";
    if (status === "active") {
      bgStyle = "bg-green-500";
    } else if (status === "suspended") {
      bgStyle = "bg-red-500";
    } else if (status === "pending") {
      bgStyle = "bg-yellow-500";
    }

    return (
      <span
        className={`px-2 py-1 text-white text-xs font-semibold bg-opacity-70 rounded ${bgStyle}`}
      >
        Active
      </span>
    );
  };

  const column = [
    (item) => NameLogo(item.name, item.logo),
    (item) => item.code,
    (item) => item.user?.profile?.firstname ?? "UnKnown",
    (item) => status(item.status),
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
