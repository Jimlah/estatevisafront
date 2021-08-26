import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import { BiLogOut, BiBuildingHouse } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <nav className="h-full bg-white px-2 flex flex-col items-start justify-start space-y-8 py-2">
      <button
        onClick={handleHide}
        className="flex items-center justify-center space-x-3 focus:outline-none"
      >
        <span className="font-bold italic text-3xl text-indigo-500">EV</span>
        {!hide && <span>EstateVisa</span>}
      </button>
      <div className="flex items-start justify-between flex-col h-full">
        <div className="flex flex-col space-y-3 items-start">
          <NavItem
            to="/dashboard"
            icon={<MdDashboard />}
            name="dashboard"
            hide={hide}
          />
          <NavItem
            to="/estates"
            icon={<BiBuildingHouse />}
            name="Estates"
            hide={hide}
          />
        </div>
        <NavItem
          to="/dashboard/logout"
          icon={<BiLogOut />}
          name="logout"
          hide={hide}
        />
      </div>
      {!hide && (
        <div className="bg-gradient-to-r from-purple-500 to-yellow-500 w-full rounded-md p-2">
          Hey
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
