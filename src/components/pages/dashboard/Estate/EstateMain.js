import { Switch } from "react-router-dom";
import PrivateRoute from "../../../Routes/PrivateRoute";
import ViewEstates from "./ViewEstates";
import CreateEstates from "./CreateEstates";
import {
  SUPER_ADMIN,
  ADMIN,
  ESTATE_OWNER,
  ESTATE_ADMIN,
  HOUSE_OWNER,
  HOUSE_SUB_OWNER,
} from "../../../../constants/RolesConstant";

const EstateMain = () => {
  return (
    <>
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
          component={ViewEstates}
          exact
        />
        <PrivateRoute
          path="/dashboard/estates/create"
          component={CreateEstates}
          exact
          rights={[
            SUPER_ADMIN,
            ADMIN,
            ESTATE_OWNER,
            ESTATE_ADMIN,
            HOUSE_OWNER,
            HOUSE_SUB_OWNER,
          ]}
        />
      </Switch>
    </>
  );
};

export default EstateMain;
