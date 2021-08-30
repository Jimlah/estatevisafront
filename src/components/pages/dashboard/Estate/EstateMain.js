import { Switch } from "react-router-dom";
import PrivateRoute from "../../../Routes/PrivateRoute";
import ViewEstates from "./ViewEstates";

const EstateMain = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/dashboard/estates" component={ViewEstates} />
      </Switch>
    </>
  );
};

export default EstateMain;
