import { Switch, useLocation } from "react-router-dom";
import Sidebar from "../../navigation/SideBar";
import TopBar from "../../navigation/TopBar";
import Logout from "../auth/LogOut";
import PrivateRoute from "./../../Routes/PrivateRoute";
import { SearchContext } from "../../../context/SearchContext";
import { useContext, useEffect, useState } from "react";
import ViewHouses from "./Houses/ViewHouses";
import EstateMain from "./Estate/EstateMain";
import EmailVerifyWarning from "../../notifications/EmailVerifyWarning";
import {
  SUPER_ADMIN,
  ADMIN,
  ESTATE_OWNER,
  ESTATE_ADMIN,
  HOUSE_OWNER,
  HOUSE_SUB_OWNER,
} from "../../../constants/RolesConstant";
import { PageLoaderContext } from "../../../context/PageLoaderContext";

const Main = () => {
  const [searchData, setSearchData] = useState([]);
  const [result, setResult] = useState(searchData);
  const initialState = { searchData, setSearchData, result, setResult };
  const location = useLocation();
  const { setPageLoader } = useContext(PageLoaderContext);

  useEffect(() => {
    setPageLoader(true);
    setTimeout(() => {
      setPageLoader(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchContext.Provider value={initialState}>
      <div className="flex items-start justify-start w-full h-screen bg-gray-200 border dark:bg-gray-900 dark:bg-opacity-75">
        <Sidebar />
        <main className="flex flex-col w-full h-full max-h-full mb-10 overflow-hidden ">
          <TopBar />
          <EmailVerifyWarning />
          <div className="flex flex-col items-start justify-start w-full h-full px-2 py-5 overflow-y-auto sm:px-5">
            <span className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-200">
              {location.pathname}
            </span>
            <Switch>
              <PrivateRoute
                path="/dashboard/estates"
                component={EstateMain}
                rights={[
                  SUPER_ADMIN,
                  ADMIN,
                  ESTATE_OWNER,
                  ESTATE_ADMIN,
                  HOUSE_OWNER,
                  HOUSE_SUB_OWNER,
                ]}
              />
              <PrivateRoute
                path="/dashboard/houses"
                component={ViewHouses}
                rights={[
                  SUPER_ADMIN,
                  ADMIN,
                  ESTATE_OWNER,
                  ESTATE_ADMIN,
                  HOUSE_OWNER,
                  HOUSE_SUB_OWNER,
                ]}
              />
              <PrivateRoute
                path="/dashboard/logout"
                rights={[
                  SUPER_ADMIN,
                  ADMIN,
                  ESTATE_OWNER,
                  ESTATE_ADMIN,
                  HOUSE_OWNER,
                  HOUSE_SUB_OWNER,
                ]}
                component={Logout}
                exact
              />
            </Switch>
          </div>
        </main>
      </div>
    </SearchContext.Provider>
  );
};

export default Main;
