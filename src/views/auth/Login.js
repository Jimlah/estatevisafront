import axios from "axios";
import React, { useEffect, useState } from "react";
import background from "../../assets/img/register_bg_2.png";
import ValidationError from "../../components/Alerts/ValidationError";
import useFetch from "../../hooks/useFetch";
import { fetch } from "../../utils/Fetch";
import { setUserSession } from "./../../utils/common";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    let formData = {
      email: email,
      password: password,
    };

    axios
      .post("http://127.0.0.1:8000/api/auth/signin", formData)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          setUserSession(response.data);
          console.log("Login success");
        }

        if (!response.data.success) {
          setError(response.data.data);
        }

        setAlert(response.data.message);
        // window.location.href = "/";
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div
      className="h-screen w-screen bg-contain bg-no-repeat bg-opacity-95 flex flex-col items-center justify-center bg-gray-900 text-opacity-90 px-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex flex-col items-center space-y-5 bg-gray-300 rounded-xl p-6 w-full max-w-xs">
        <span className="font-bold text-2xl">Login</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-5 w-full"
        >
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="uppercase text-xs mb-2 font-bold block"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-0 p-3 rounded text-sm focus:outline-none bg-white w-full ease-linear transition-all duration-150 shadow focus:ring focus:ring-blue-900"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <ValidationError error={error?.email} />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="uppercase text-xs mb-2 font-bold block"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-0 p-3 rounded text-sm focus:outline-none bg-white w-full ease-linear transition-all duration-150 shadow focus:ring focus:ring-blue-900"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <ValidationError error={error?.password} />
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="border-0 p-3 rounded text-sm focus:outline-none bg-gray-900 text-white font-bold w-full ease-linear transition-all duration-150 hover:bg-gray-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center text-xs w-full text-gray-100 mt-5 px-2">
        <a href="">Forgot your password?</a>
        <a href="">Create new account</a>
      </div>
    </div>
  );
}
