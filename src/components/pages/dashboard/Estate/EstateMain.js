import { Switch } from "react-router-dom";
import PrivateRoute from "../../../Routes/PrivateRoute";
import ViewEstates from "./ViewEstates";
import CreateEstates from "./CreateEstates";

const EstateMain = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/dashboard/estates" component={ViewEstates} exact />
        <PrivateRoute
          path="/dashboard/estates/create"
          component={CreateEstates}
          exact
        />
      </Switch>
    </>
  );
};

export default EstateMain;
