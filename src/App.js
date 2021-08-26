import { AlertContext } from "./context/AlertContext";
import { useState } from "react";
import Alert from "./components/notifications/Alert";
import BaseAuth from "./components/pages/auth/BaseAuth";
import { UserContext } from "./context/UserContext";
import Root from "./components/pages/layout/Root";

const App = () => {
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  const initialUserState = { user, setUser };
  const initialAlertState = {
    message,
    errors,
    setErrors,
    setMessage,
    status,
    setStatus,
  };

  return (
    <div>
      <UserContext.Provider value={initialUserState}>
        <AlertContext.Provider value={initialAlertState}>
          {message && (
            <Alert message={message} status={status} handleClick={() => setMessage(null)} />
          )}
          <Root />
        </AlertContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
