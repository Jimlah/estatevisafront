import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Panel = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleHide = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center px-5 sm:px-10">
        <div className="relative bg-gray-100 dark:bg-gray-900 px-5 inline-block rounded-lg py-10">
          <button
            onClick={handleHide}
            className="absolute top-0 right-0 mr-3 text-gray-500"
          >
            <FaTimes />
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Panel;
