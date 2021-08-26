import Input from "../../form/Input";
import useInput from "./../../../hooks/useInput";
import { Link } from "react-router-dom";
import SubmitButton from "../../form/SubmitButton";
import { useContext } from "react";
import { AlertContext } from "../../../context/AlertContext";
import { Auth } from "../../../services/auth.services";

const ForgotPassword = () => {
  const [email, bindEmail] = useInput("");
  const { errors, setErrors, setMessage } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email };

    const res = await Auth.forgotPassword(formData);
    setErrors(null);
    setMessage(null);
    if (res.message) {
      setMessage(res.message);
    }
    if (res.errors) {
      setErrors(res.errors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-xs bg-white dark:bg-gray-700 py-5 rounded-md bg-opacity-50">
      <h2 className="text-xl font-bold text-blue-700">Forgot Password</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 items-start w-full px-5 py-8"
      >
        <Input
          type={"text"}
          name={"email"}
          error={errors?.email ?? null}
          label={"email"}
          bind={bindEmail}
        />
        <SubmitButton />
      </form>
      <div>
        <Link
          to={"/login"}
          className="text-xs font-medium tracking-wider text-blue-500 hover:text-blue-700"
        >
          Remember password?
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
