import { UserContext } from "../../context/UserContext";
import Search from "../form/Search";
import { useContext } from "react";
import ChangMode from "../form/ChangeMode";

const TopBar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white dark:bg-gray-900 dark:bg-opacity-10 w-full px-2 sm:px-5 py-3 flex items-center justify-between text-gray-500 shadow-md space-x-5 overflow-hidden">
      <div className="w-1/2 sm:max-w-max">
        <Search />
      </div>
      <div className="flex space-x-3 items-center justify-center">
        <ChangMode />
        <span className="flex items-center space-x-1">
          <span>Icon</span>
          <span className="hidden sm:inline-block">{user?.user?.email}</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
