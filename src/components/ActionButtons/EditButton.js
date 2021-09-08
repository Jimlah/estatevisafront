import { BsPencilSquare } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const EditButton = ({ id }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Link to={`${pathname}/${id}/edit`}>
      <IconContext.Provider
        value={{ className: "h-4 w-4 text-green-500 hover:text-green-700" }}
      >
        <BsPencilSquare />
      </IconContext.Provider>
    </Link>
  );
};

export default EditButton;
