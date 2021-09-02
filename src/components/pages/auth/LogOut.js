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
      setMessage(null);
      setErrors(null);
      setStatus(null);
      if (res.status) {
        setStatus(res.status);
      }
      if (res.message) {
        setMessage(res.message);
      }
      if (res.errors) {
        setErrors(res.errors);
      }

      history.push("/auth/login");
    }, 1000);

    return () => {
      setUser(null);
    };
  }, [history, setUser]);

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
