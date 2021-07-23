/*eslint-disable*/
import React from "react";
import { IconContext } from "react-icons";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export default function Sidebar({ display, changeState }) {
  return (
    <>
      <nav className="px-6 py-4 bg-white">
        <div className="flex justify-between items-center">
          <button onClick={changeState} className="block md:hidden">
            {display && (
              <IconContext.Provider value={{ className: "h-6 w-6 " }}>
                <FaTimes />
              </IconContext.Provider>
            )}
            {!display && (
              <IconContext.Provider value={{ className: "h-6 w-6 " }}>
                <GiHamburgerMenu />
              </IconContext.Provider>
            )}
          </button>
          <span className="font-bold text-gray-500 text-xl">EstateVisa</span>
          <div className="flex space-x-3 items-center">
            <NotificationDropdown />
            <UserDropdown />
          </div>
        </div>
      </nav>
    </>
  );
}
