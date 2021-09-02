import BaseAuth from "../auth/BaseAuth";
import Main from "../dashboard/Main";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute";
import PublicRoute from "../../Routes/PublicRoute";
import {
  SUPER_ADMIN,
  ADMIN,
  ESTATE_OWNER,
  ESTATE_ADMIN,
  HOUSE_OWNER,
  HOUSE_SUB_OWNER,
} from "../../../constants/RolesConstant";

const Root = () => {
  return (
    <div className="bg-indigo-900 h-screen slashed-zero">
      <Switch>
        <PublicRoute restricted={true} path="/auth" component={BaseAuth} />
        <PrivateRoute
          path="/dashboard"
          rights={[
            SUPER_ADMIN,
            ADMIN,
            ESTATE_OWNER,
            ESTATE_ADMIN,
            HOUSE_OWNER,
            HOUSE_SUB_OWNER,
          ]}
          component={Main}
        />
      </Switch>
    </div>
  );
};

export default Root;
