import axios from "axios";
import { useContext } from "react";
import { IconContext } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { removeUserSession } from "../../utils/common";

const AdminNavbar = () => {
  const user = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    var config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.user.original.access_token,
      },
    };

    axios
      .get("http://127.0.0.1:8000/api/auth/signout", config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    removeUserSession();
    history.push("/login");
  };

  return (
    <div className="absolute md:static h-full bg-white text-blue-700 border z-50">
      <div className="overflow-auto h-full bg-white flex flex-col justify-between">
        <div>
          <a
            href="#"
            className="px-4 py-3 text-sm flex space-x-2 items-center font-bold text-opacity-50"
          >
            <span>
              <IconContext.Provider value={{ className: "h-6 w-6" }}>
                <MdDashboard />
              </IconContext.Provider>
            </span>
            <span>Dashboard</span>
          </a>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-sm space-x-2 font-bold"
        >
          <span>
            <IconContext.Provider value={{ className: "h-6 w-6" }}>
              <RiLogoutBoxRLine />
            </IconContext.Provider>
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
