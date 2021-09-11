import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { removeUserSession } from "../../../utils/common";
import { UserContext } from "./../../../context/UserContext";
import { Auth } from "./../../../services/auth.services";
import { AlertContext } from "./../../../context/AlertContext";
const Logout = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const { setMessage, setErrors, setStatus } = useContext(AlertContext);

  useEffect(() => {
    setTimeout(async () => {
      const res = await Auth.logOut();
      setUser(null);
      removeUserSession();
      setStatus(res.status);
      setMessage(res.message);
      setErrors(res.errors);
    }, 1000);

    history.push("/auth/login");

    return () => {
      setUser(null);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
      <div className="flex items-center p-5 space-x-3 text-gray-500 bg-white bg-opacity-50 rounded-md shadow center">
        <span className="p-5 border-2 border-b-0 border-indigo-500 rounded-full animate-spin"></span>
        <span>Logging out</span>
      </div>
    </div>
  );
};

export default Logout;
