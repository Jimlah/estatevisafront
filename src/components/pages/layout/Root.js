import BaseAuth from "../auth/BaseAuth";
import Main from "../dashboard/Main";
import { Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth" component={BaseAuth} />
        <Route path="/dashboard" component={Main} />
      </Switch>
    </div>
  );
};

export default Root;
