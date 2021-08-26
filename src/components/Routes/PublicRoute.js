import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../utils/common";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getUser && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
