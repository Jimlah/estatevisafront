import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState, useContext } from "react";
import { AlertContext } from "./../../context/AlertContext";

const DeleteConfirmation = ({ funDelete, id, setId }) => {
  const { setStatus, setMessage } = useContext(AlertContext);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(false);
    setId(null);
  };

  const handleDelete = async () => {
    const res = await funDelete(id);
    if (res.message) {
      setStatus(res?.status);
      setMessage(res.message);
    }
    setShow(false);
    setId(null);
  };

  useEffect(() => {
    if (id) {
      setShow(true);
    }
  }, [id]);

  return (
    show && (
      <div className="absolute flex items-center justify-center w-full h-full top-0 left-0 z-50">
        <div className="bg-white rounded-lg flex flex-col items-center justify-center p-5 md:p-10 shadow-md max-w-xs space-y-5 dark:bg-gray-900">
          <span>
            <IconContext.Provider
              value={{ className: "h-10 w-10 text-red-500" }}
            >
              <RiDeleteBin6Line />
            </IconContext.Provider>
          </span>
          <h2 className="font-bold text-xl">Are you sure?</h2>
          <p className="break-all text-center whitespace-normal text-sm text-gray-500">
            Do you really want to delete this item? This process cannot be
            undone.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <button
              onClick={handleClick}
              className="px-3 py-2 rounded-full tracking-wide border border-gray-300 font-bold text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-2 rounded-full tracking-wide  font-bold text-white bg-red-500 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteConfirmation;
