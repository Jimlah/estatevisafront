import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/img/register_bg_2.png";
import ValidationError from "../../components/Alerts/ValidationError";

export default function Login() {
  return (
    <div
      className="h-screen w-screen bg-contain bg-no-repeat bg-opacity-95 flex flex-col items-center justify-center bg-gray-900 text-opacity-90 px-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex flex-col items-center space-y-5 bg-gray-300 rounded-xl p-6 w-full max-w-xs">
        <span className="font-bold text-2xl">Login</span>
        <form className="flex flex-col items-center space-y-5 w-full">
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
            />
            <ValidationError error={"Hey you"} />
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
            />
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
