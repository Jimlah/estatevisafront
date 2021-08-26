import { Switch } from "react-router-dom";
import Sidebar from "../../navigation/SideBar";
import TopBar from "../../navigation/TopBar";
import Logout from "../auth/LogOut";
import PrivateRoute from "./../../Routes/PrivateRoute";

const Main = () => {
  return (
    <div className="h-screen flex border items-start justify-start w-full bg-gray-200">
      <Sidebar />
      <main className="w-full">
        <TopBar />
        Main
        <Switch>
          <PrivateRoute path="/dashboard/logout" component={Logout} />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
