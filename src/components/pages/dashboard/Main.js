import { Switch } from "react-router-dom";
import Sidebar from "../../navigation/SideBar";
import TopBar from "../../navigation/TopBar";
import Logout from "../auth/LogOut";
import PrivateRoute from "./../../Routes/PrivateRoute";
import ViewEstates from "./Estate/ViewEstates";
import { SearchContext } from "../../../context/SearchContext";
import { useState } from "react";
import ViewHouses from "./Houses/ViewHouses";

const Main = () => {
  const [searchData, setSearchData] = useState([]);
  const [result, setResult] = useState(searchData);
  const initialState = { searchData, setSearchData, result, setResult };

  return (
    <SearchContext.Provider value={initialState}>
      <div className="h-screen flex border items-start justify-start w-full bg-gray-200 dark:bg-gray-900 dark:bg-opacity-75 h-full">
        <Sidebar />
        <main className="w-full overflow-hidden h-full">
          <TopBar />
          <div className="px-2 sm:px-5 py-6 w-full h-full flex items-start justify-start flex-col">
            <Switch>
              <PrivateRoute
                path="/dashboard/estates"
                component={ViewEstates}
                exact
              />
              <PrivateRoute
                path="/dashboard/houses"
                component={ViewHouses}
                exact
              />
            </Switch>
          </div>
          <Switch>
            <PrivateRoute path="/dashboard/logout" component={Logout} />
          </Switch>
        </main>
      </div>
    </SearchContext.Provider>
  );
};

export default Main;
