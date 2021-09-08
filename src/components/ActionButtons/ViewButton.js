import { Link, useLocation } from "react-router-dom";

const ViewButton = ({ id }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return <Link to={`${pathname}/${id}`}> View </Link>;
};

export default ViewButton;
