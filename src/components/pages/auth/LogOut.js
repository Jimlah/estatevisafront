import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { removeUserSession } from "../../../utils/common";
import { UserContext } from "./../../../context/UserContext";
const Logout = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      removeUserSession();
      setUser(null);
      history.push("/auth/login");
    }, 1000);

    return () => {
      return null;
    };
  }, [history]);

  return (
    <div className="absolute z-50 top-0 left-0 h-screen w-full flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow flex items-center center space-x-3 text-gray-500 bg-opacity-50">
        <span className="p-5 rounded-full border-2 border-b-0 animate-spin border-indigo-500"></span>
        <span>Logging out</span>
      </div>
    </div>
  );
};

export default Logout;
