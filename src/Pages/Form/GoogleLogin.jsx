import React, { useEffect } from "react";
import google from "../../assets/icons/google.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        toast.success("User Login SuccessFull");
      }, 1000);
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (googleLoading) {
    return <Spinner />;
  }

  if (googleError) {
    const errorMessage = googleError?.message.split(":")[1];
    toast.error(errorMessage);
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline w-full"
      >
        <img className="mr-2 w-7" src={google} alt="" />
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;
