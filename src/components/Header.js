import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store?.gpt?.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-50 px-10 py-10 flex flex-col md:flex-row justify-between pr-48">
      <img className="w-28 md:w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex justify-center items-center mt-3 md:mt-0">
          <button
            className="bg-green-600 hover:bg-green-500 px-5 py-3 rounded-lg mr-5 font-semibold text-sm md:text-lg transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={handleGptSearchClick}
          >
            {gptToggle ? "Homepage" : "GPT Search"}
          </button>
          <div
            className="flex relative"
            onMouseEnter={() => {
              setShowDropdown(true);
            }}
            onMouseLeave={() => {
              setShowDropdown(false);
            }}
          >
            <img className="w-12 h-12 md:mr-5" src={USER_LOGO} alt="user" />
            {showDropdown && (
              <div className="flex flex-col bg-slate-700 rounded-md cursor-pointer absolute top-12 w-48 font-bold text-white">
                <span className="px-5 py-3 rounded-md hover:bg-slate-800">
                  Signed in as {user.displayName}
                </span>
                <span
                  className="text-red-500 px-5 py-3 rounded-md hover:bg-slate-800"
                  onClick={handleSignOut}
                >
                  Sign out
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
