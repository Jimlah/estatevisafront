import { Link, useLocation } from "react-router-dom";

const EditButton = ({ id }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return <Link to={`${pathname}/${id}/edit`}> edit </Link>;
};

export default EditButton;
