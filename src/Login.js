import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="fixed z-[-1] top-0 bottom-0 w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-5/12 bg-black text-white opacity-80 mx-auto p-10">
        <div className="text-3xl font-bold p-2">Sign in</div>
        <div className="p-2">
          <input type="text" placeholder="Email or mobile number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className="p-2">
          <input type="text" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className="p-4 text-center">
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
