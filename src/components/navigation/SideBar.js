import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import { BiLogOut, BiBuildingHouse } from "react-icons/bi";
import { useState } from "react";
import mobile from "../../assets/img/mobile.png";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <nav className="h-full bg-white px-2 flex flex-col items-start justify-start space-y-8 py-2 dark:bg-gray-900">
      <button
        onClick={handleHide}
        className="flex items-center justify-center space-x-3 focus:outline-none"
      >
        <span className="font-bold italic text-3xl text-indigo-500">EV</span>
        {!hide && (
          <span className="dark:text-gray-100 font-semibold">EstateVisa</span>
        )}
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
            to="/dashboard/estates"
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
        <div className="bg-gradient-to-r from-purple-500 to-yellow-500 w-full rounded-md shadow-md">
          <div className="bg-opacity-25">
            <div
              style={{ backgroundImage: `url(${mobile})` }}
              className="bg-cover w-full h-20 rounded-t-md"
            ></div>
            <div className="p-3 flex flex-col items-center justify-center space-y-2">
              <p className="w-full text-center text-gray-700 text-sm">
                Get Mobile App
              </p>
              <IconContext.Provider value={{ className: "h-5 w-5 text-white" }}>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://play.google.com/"
                    className="p-2 bg-gray-500 rounded-full hover:bg-gray-900"
                  >
                    <IoLogoGooglePlaystore />
                  </a>
                  <a
                    href="https://www.apple.com/store"
                    className="p-2 bg-gray-500 rounded-full hover:bg-gray-900"
                  >
                    <IoLogoApple />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
