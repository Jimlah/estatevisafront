import { useState } from "react";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

const UserDropdown = () => {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };

  return (
    <div className="relative">
      <button onClick={toggle}>
        <IconContext.Provider value={{ className: "w-8 h-8 text-gray-500" }}>
          <FaUserCircle />
        </IconContext.Provider>
      </button>
      {display && (
        <div className="absolute flex flex-col right-0 border rounded shadow bg-white z-50">
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-nowrap"
          >
            hey boy
          </a>
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-nowrap"
          >
            hey
          </a>
          <a
            href=""
            className="px-4 py-2 font-normal text-sm whitespace-nowrap"
          >
            hey
          </a>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
