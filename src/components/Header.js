import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
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
    <div className="absolute w-full bg-gradient-to-b from-black z-50 px-10 py-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex justify-center items-center">
          <img className="w-12 h-12 mr-5" src={USER_LOGO} alt="user" />
          <button
            className="border border-none bg-red-600 rounded-lg px-5 py-3 font-bold text-white"
            onClick={handleSignOut}
          >
            Sign out {user.displayName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
