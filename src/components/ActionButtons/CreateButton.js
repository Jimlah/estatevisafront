import { IoMdAdd } from "react-icons/io";

const CreateButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-2.5 py-1.5 bg-indigo-500 rounded-md text-white font-semibold flex items-center space-x-1.5 hover:bg-indigo-700"
  >
    <span>
      <IoMdAdd />
    </span>
    <span>Create</span>
  </button>
);

export default CreateButton;
