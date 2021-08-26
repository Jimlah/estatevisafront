import { Route, Switch, useRouteMatch } from "react-router-dom";
import register_bg_2 from "../../../assets/img/register_bg_2.png";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

const BaseAuth = () => {
  const { path, url } = useRouteMatch();
  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-gray-200 dark:bg-gray-900"
      style={{ backgroundImage: `url(${register_bg_2})` }}
    >
      <div className="flex items-center justify-center h-screen px-10 overflow-hidden">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/forgot-password" component={ForgotPassword} />
        </Switch>
      </div>
    </div>
  );
};

export default BaseAuth;
