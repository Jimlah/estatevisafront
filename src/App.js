import { AlertContext } from "./context/AlertContext";
import { useEffect, useState } from "react";
import Alert from "./components/notifications/Alert";
import { UserContext } from "./context/UserContext";
import Root from "./components/pages/layout/Root";
import { getUser } from "./utils/common";
import { useHistory } from "react-router-dom";
import { PageLoaderContext } from "./context/PageLoaderContext";
import PageLoader from "./components/Loader/PageLoader";

const App = () => {
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);
  const [pageLoader, setPageLoader] = useState(false);
  const [submitLoader, setSubmitLoader] = useState(false);
  const [tableLoader, setTableLoader] = useState(false);

  const history = useHistory();

  const initialPageLoaderState = {
    pageLoader,
    setPageLoader,
    tableLoader,
    setTableLoader,
    submitLoader,
    setSubmitLoader,
  };
  const initialUserState = { user, setUser };
  const initialAlertState = {
    message,
    errors,
    setErrors,
    setMessage,
    status,
    setStatus,
  };

  useEffect(() => {
    if (getUser() !== null && user === null) {
      setUser(getUser());
    }

    if (getUser() === null) {
      setUser(null);
      history.push("/auth/login");
    }

    return () => {
      setUser(null);
      history.push("/auth/login");
    };
    // eslint-disable-next-line
  }, [history]);

  return (
    <div>
      <PageLoaderContext.Provider value={initialPageLoaderState}>
        <PageLoader isLoading={pageLoader} />
        <UserContext.Provider value={initialUserState}>
          <AlertContext.Provider value={initialAlertState}>
            {message && (
              <Alert
                message={message}
                status={status}
                handleClick={() => {
                  setMessage(null);
                  setStatus(null);
                  setErrors(null);
                }}
              />
            )}
            <Root />
          </AlertContext.Provider>
        </UserContext.Provider>
      </PageLoaderContext.Provider>
    </div>
  );
};

export default App;
