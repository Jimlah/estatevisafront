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
import ShowEstate from "./ShowEstate";

const EstateMain = () => {
  return (
    <div className="w-full">
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
        <PrivateRoute
          path="/dashboard/estates/:id"
          component={ShowEstate}
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
        <PrivateRoute
          path="/dashboard/estates/:id/edit"
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
    </div>
  );
};

export default EstateMain;
