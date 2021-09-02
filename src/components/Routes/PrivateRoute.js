import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../utils/common";
import useRoles from "./../../hooks/useRoles";

const PrivateRoute = ({ component: Component, rights, ...rest }) => {
  const role = useRoles(rights);
  return (
    <Route
      {...rest}
      render={(props) =>
        getUser() !== null ? (
          role && <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
