import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { useEffect } from "react";
import { useState } from "react";
import useRoles from "./../../hooks/useRoles";
const NavItem = ({ to, name, icon, hide = false, rights = [] }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const role = useRoles(rights);

  useEffect(() => {
    setIsActive(location.pathname === to);
  }, [location, to]);

  return (
    role && (
      <Link
        to={to}
        className={`group px-2 py-1 rounded-md text-xs font-medium tracking-wider text-gray-500 flex items-center justify-start space-x-3 hover:text-gray-900 capitalize hover:bg-gray-200 dark:hover:bg-indigo-900 w-full ${
          isActive ? "bg-gray-100 dark:bg-indigo-900 dark:text-white" : ""
        }`}
      >
        <span>
          <IconContext.Provider
            value={{
              className: "h-5 w-5 group-hover:text-indigo-500",
            }}
          >
            {icon}
          </IconContext.Provider>
        </span>
        {!hide && <span className="dark:hover:text-gray-200">{name}</span>}
      </Link>
    )
  );
};

export default NavItem;
