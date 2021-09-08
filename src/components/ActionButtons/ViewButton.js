import { AiOutlineEye } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";

const ViewButton = ({ id }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Link to={`${pathname}/${id}`}>
      <IconContext.Provider
        value={{ className: "h-5 w-5 text-blue-500 hover:text-blue-700" }}
      >
        <AiOutlineEye />
      </IconContext.Provider>
    </Link>
  );
};

export default ViewButton;
