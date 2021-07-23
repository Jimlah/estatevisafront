import { Route, Redirect } from "react-router-dom";
import { getUser } from "./common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(getUser());
  return (
    <Route
      {...rest}
      render={(props) =>
        getUser() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
