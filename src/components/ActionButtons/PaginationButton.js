import { GrNext, GrPrevious } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const PaginationButton = ({ handlePrev, handleNext, currentPage }) => {
  return (
    <IconContext.Provider value={{ className: "text-gray-50" }}>
      <div className="flex items-center justify-start space-x-3">
        <button
          onClick={handlePrev}
          className=" focus:outline-none bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-700"
        >
          <BsChevronLeft />
        </button>
        <span className="text-gray-900 text-gray-100">{currentPage}</span>
        <button
          onClick={handleNext}
          className=" focus:outline-none bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-700"
        >
          <BsChevronRight />
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default PaginationButton;
