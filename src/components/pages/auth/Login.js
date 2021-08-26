import useInput from "../../../hooks/useInput";
import Input from "../../form/Input";
import SubmitButton from "./../../form/SubmitButton";
import { Auth } from "./../../../services/auth.services";
import { useContext } from "react";
import { AlertContext } from "./../../../context/AlertContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");
  const { setMessage, setErrors, errors } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    const res = await Auth.login(JSON.stringify(formData));
    setMessage(null);
    setErrors(null);
    if (res.message) {
      setMessage(res.message);
    }
    if (res.errors) {
      setErrors(res.errors);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-xs bg-white dark:bg-gray-700 py-5 rounded-md bg-opacity-50">
      <h2 className="text-3xl font-bold text-blue-700">Login</h2>
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

        <Input
          type={"password"}
          name={"password"}
          error={errors?.password ?? null}
          label={"password"}
          bind={bindPassword}
        />
        <div className="flex items-center justify-start space-x-2 text-sm tracking-wider">
          <input
            type="checkbox"
            name="remember_me"
            id="remember_me"
            value="true"
          />
          <label htmlFor="remember_me" className="text-gray-500">Remember me</label>
        </div>
        <SubmitButton />
      </form>
      <div>
        <Link
          to={"/forget-password"}
          className="text-xs font-medium tracking-wider text-blue-500 hover:text-blue-700"
        >
          Forget your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
