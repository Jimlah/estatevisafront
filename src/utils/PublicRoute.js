import { Route } from "react-router-dom";
import { getUser } from "./common";
import { Redirect } from "react-router-dom";
const PublicRoute = ({ component: Component, ...rest }) => {
  console.log(getUser());

  return (
    <Route
      {...rest}
      render={(props) =>
        !getUser() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
