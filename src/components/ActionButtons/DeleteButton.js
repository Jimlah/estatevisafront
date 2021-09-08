import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteButton = ({ handleDelete }) => {
  return (
    <button
      onClick={handleDelete}
      className="text-red-500 focus:outline-none hover:text-red-700"
    >
      <IconContext.Provider value={{ className: "h-4 w-4" }}>
        <RiDeleteBin6Line />
      </IconContext.Provider>
    </button>
  );
};

export default DeleteButton;
