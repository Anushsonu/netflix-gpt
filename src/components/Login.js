import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);

  const toggleSigninfOrm = () => {
    setIsSigninForm(!isSigninForm);
  };
  return (
    <div className="bg-black">
      <Header />
      <div className="absolute w-auto">
        <img
          className="w-screen h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="w-3/12 flex flex-col absolute right-0 left-0 p-12 bg-black bg-opacity-90 my-36 mx-auto">
        <h2 className="text-white font-bold text-3xl mb-5">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSigninForm ? (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 my-2 rounded-md bg-gray-800"
          />
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="email"
          className="p-2 my-2 rounded-md bg-gray-800"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-2 rounded-md bg-gray-800"
        />
        <button className="p-4 my-5 text-white bg-red-600 rounded-md">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={() => toggleSigninfOrm()}
          className="text-white py-4 cursor-pointer hover:text-gray-400"
        >
          {isSigninForm
            ? "New to Netflix? Sign Up now !"
            : "Already a user? Sign In now !"}
        </p>
      </form>
    </div>
  );
};

export default Login;
