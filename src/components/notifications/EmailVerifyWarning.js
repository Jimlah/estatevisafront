import Panel from "./../Layouts/Panel";
import mail from "./../../assets/img/mail.png";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "./../../context/AlertContext";
import { Auth } from "./../../services/auth.services";
import { getUser } from "./../../utils/common";
const EmailVerifyWarning = () => {
  const { setMessage, setStatus } = useContext(AlertContext);
  const [hide, setHide] = useState(false);

  const handleResendEmail = async () => {
    const res = await Auth.resendVerification();

    setStatus(res.status);
    setMessage(res.message);
  };

  useEffect(() => {
    if (getUser()?.user.email_verified_at) {
      setHide(false);
    } else {
      setHide(true);
    }

    return () => {
      setHide(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUser()]);

  return (
    hide && (
      <Panel>
        <div className="w-full h-full flex flex-col items-center space-y-8">
          <h2 className="text-lg font-bold">Verify your Email</h2>
          <p className="text-sm font-semibold text-gray-500">
            You will need to verify your email to complete this registration
          </p>
          <div
            className="bg-center bg-contain bg-no-repeat h-48 w-48"
            style={{ backgroundImage: `url(${mail})` }}
          ></div>
          <p className="text-xs font-light text-center text-gray-500">
            An Email has been sent to your account with a link to verify your
            account. If you have not receive the email after a few minutes
            please check your span folder.
          </p>
          <div className="flex items-center justify-center space-x-14">
            <button
              onClick={handleResendEmail}
              className="text-xs font-semibold px-4 py-2 bg-indigo-500 hover:border-indigo-500 border hover:text-indigo-500 hover:bg-transparent text-white rounded-lg"
            >
              Resend Email
            </button>
            <button className="text-xs font-semibold px-4 py-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-lg">
              Contact Support
            </button>
          </div>
        </div>
      </Panel>
    )
  );
};

export default EmailVerifyWarning;
