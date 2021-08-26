import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
const NavItem = ({ to, name, icon, hide = false }) => {
  return (
    <Link
      to={to}
      className="group px-2 py-1 rounded-md text-xs font-medium tracking-wider text-gray-500 flex items-center justify-center space-x-3 hover:text-gray-900 capitalize"
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
      {!hide && <span>{name}</span>}
    </Link>
  );
};

export default NavItem;
