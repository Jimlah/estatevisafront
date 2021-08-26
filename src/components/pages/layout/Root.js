import BaseAuth from "../auth/BaseAuth";
import Main from "../dashboard/Main";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../Routes/PrivateRoute";
import PublicRoute from "../../Routes/PublicRoute";

const Root = () => {
  return (
    <div>
      <Switch>
        <PublicRoute restricted={true} path="/auth" component={BaseAuth} />
        <PrivateRoute path="/dashboard" component={Main} />
      </Switch>
    </div>
  );
};

export default Root;
