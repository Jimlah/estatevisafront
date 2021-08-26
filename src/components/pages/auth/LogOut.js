import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/dashboard");
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
