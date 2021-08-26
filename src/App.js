import { AlertContext } from "./context/AlertContext";
import { useState } from "react";
import Alert from "./components/notifications/Alert";
import BaseAuth from "./components/pages/auth/BaseAuth";

const App = () => {
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);

  const initialAlertState = { message, errors, setErrors, setMessage };

  return (
    <div>
      <AlertContext.Provider value={initialAlertState}>
        {message && (
          <Alert message={message} handleClick={() => setMessage(null)} />
        )}
        <BaseAuth />
      </AlertContext.Provider>
    </div>
  );
};

export default App;
