import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Index from "./Index";
import { useEffect, useState } from "react";
import { UserContext } from "../hooks/UserContext";
import Admin from "./../layouts/Admin";
import { getUser } from "./../utils/common";

const App = () => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);
  const value = { user, alert, setAlert, setUser };

  useEffect(() => {
    let isMounted = true;
    const loggedInUser = getUser();
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <UserContext.Provider value={value}>
      <div>
        <BrowserRouter>
          {!user && (
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/login" exact component={Login} />
              {/* <PrivateRoute path="/login" exact component={Login} /> */}
              <Redirect from="*" to="/" />
            </Switch>
          )}
          {!user && <Redirect from="*" to="/login" />}
          {user && <Route path="/dashboard" component={Admin} />}
          {user && <Redirect from="*" to="/dashboard" />}
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
};

export default App;
