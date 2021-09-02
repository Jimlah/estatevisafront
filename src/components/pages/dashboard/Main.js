import { Switch, useLocation } from "react-router-dom";
import Sidebar from "../../navigation/SideBar";
import TopBar from "../../navigation/TopBar";
import Logout from "../auth/LogOut";
import PrivateRoute from "./../../Routes/PrivateRoute";
import { SearchContext } from "../../../context/SearchContext";
import { useState } from "react";
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

const Main = () => {
  const [searchData, setSearchData] = useState([]);
  const [result, setResult] = useState(searchData);
  const initialState = { searchData, setSearchData, result, setResult };
  const location = useLocation();

  return (
    <SearchContext.Provider value={initialState}>
      <div className="h-screen flex border items-start justify-start w-full bg-gray-200 dark:bg-gray-900 dark:bg-opacity-75">
        <Sidebar />
        <main className="w-full overflow-hidden h-full max-h-full mb-10">
          <TopBar />
          <EmailVerifyWarning />
          <div className="px-2 sm:px-5 py-3 w-full h-full flex items-start justify-start flex-col overflow-y-auto">
            <span className="text-gray-500 text-xs mb-2 font-semibold dark:text-gray-200">
              {location.pathname}
            </span>
            <Switch>
              <PrivateRoute
                path="/dashboard/estates"
                rights={[
                  SUPER_ADMIN,
                  ADMIN,
                  ESTATE_OWNER,
                  ESTATE_ADMIN,
                  HOUSE_OWNER,
                  HOUSE_SUB_OWNER,
                ]}
                component={EstateMain}
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
                exact
              />
            </Switch>
          </div>
          <Switch>
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
            />
          </Switch>
        </main>
      </div>
    </SearchContext.Provider>
  );
};

export default Main;
