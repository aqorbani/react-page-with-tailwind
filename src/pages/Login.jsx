import React, { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="h-screen flex flex-col items-center">
      <h4 className="text-2xl uppercase font-black text-center m-10">
        Login Page
      </h4>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3 bg-gray-100 rounded">
        <form>
          <div className="m-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="enter your Email"
              />
            </div>
          </div>
          <div className="m-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="enter your Password"
              />
            </div>
          </div>
          <div className="m-2 mt-2 flex justify-between">
            <div class="flex items-center me-4">
              <input
                id="red-checkbox"
                type="checkbox"
                value={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                class="w-4 h-4 text-gray-700 bg-gray-100 border-gray-300 rounded focus:ring-gray-900 focus:ring-2"
              />
              <label
                for="red-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div class="flex items-center me-4">
              <a href="#">forget password</a>
            </div>
          </div>
          <div className="m-2">
            <button className="w-full bg-gray-200 p-2 rounded text-center mt-12 hover:bg-gray-300 cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
