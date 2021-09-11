import useInput from "../../../hooks/useInput";
import Input from "../../form/Input";
import SubmitButton from "./../../form/SubmitButton";
import { Auth } from "./../../../services/auth.services";
import { useContext, useEffect } from "react";
import { AlertContext } from "./../../../context/AlertContext";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { setUserSession } from "../../../utils/common";
import { PageLoaderContext } from "../../../context/PageLoaderContext";

const Login = () => {
  const [email, bindEmail] = useInput("");
  const [password, bindPassword] = useInput("");
  const { setMessage, setErrors, errors, setStatus } = useContext(AlertContext);
  const { setUser } = useContext(UserContext);
  const { setPageLoader } = useContext(PageLoaderContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    setPageLoader(true);
    e.preventDefault();
    const formData = { email, password };
    const res = await Auth.login(formData);
    setStatus(res.status);
    setMessage(res.message);
    setErrors(res.errors);
    if (res.status === "success") {
      setUser(res);
      setUserSession(JSON.stringify(res));
      history.push("/dashboard");
    }
    setPageLoader(false);
  };

  useEffect(() => {
    return () => {
      setPageLoader(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs py-5 space-y-3 bg-white bg-opacity-50 rounded-md dark:bg-gray-700">
      <h2 className="text-3xl font-bold text-blue-700">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start w-full px-5 py-8 space-y-5"
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
          <label htmlFor="remember_me" className="text-gray-500">
            Remember me
          </label>
        </div>
        <SubmitButton />
      </form>
      <div>
        <Link
          to={"/auth/forgot-password"}
          className="text-xs font-medium tracking-wider text-blue-500 hover:text-blue-700"
        >
          Forget your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
