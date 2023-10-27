import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const toggleSigninfOrm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleButtonClick = () => {
    const value = checkValidData(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(value);
    if (errorMessage) return;
    if (!isSigninForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
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
      <form
        className="w-4/5 md:w-3/12 flex flex-col absolute right-0 left-0 p-12 bg-black bg-opacity-90 my-36 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-white font-bold text-3xl mb-5">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSigninForm ? (
          <input
            ref={displayName}
            type="text"
            placeholder="Full name"
            className="p-2 my-2 text-white rounded-md bg-gray-800"
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="email"
          placeholder="email"
          className="p-2 my-2 text-white rounded-md bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-2 rounded-md bg-gray-800 text-white"
        />
        <p className="text-red-600 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-5 text-white bg-red-600 rounded-md"
          onClick={handleButtonClick}
        >
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
