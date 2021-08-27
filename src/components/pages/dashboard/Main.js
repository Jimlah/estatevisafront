import { Switch } from "react-router-dom";
import Sidebar from "../../navigation/SideBar";
import TopBar from "../../navigation/TopBar";
import Logout from "../auth/LogOut";
import PrivateRoute from "./../../Routes/PrivateRoute";
import ViewEstates from "./Estate/ViewEstates";
import TestTable from "./../../table/TestTable";

const Main = () => {
  return (
    <div className="h-screen flex border items-start justify-start w-full bg-gray-200 dark:bg-gray-900 dark:bg-opacity-75">
      <Sidebar />
      <main className="w-full overflow-hidden">
        <TopBar />
        <div className="px-2 sm:px-5 py-8 w-full">
          <Switch>
            <PrivateRoute path="/dashboard" component={TestTable} exact />
            <PrivateRoute
              path="/dashboard/estates"
              component={ViewEstates}
              exact
            />
          </Switch>
        </div>
        <Switch>
          <PrivateRoute path="/dashboard/logout" component={Logout} />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
