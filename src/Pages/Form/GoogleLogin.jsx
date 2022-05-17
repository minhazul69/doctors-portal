import React, { useEffect } from "react";
import google from "../../assets/icons/google.svg";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner/Spinner";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const GoogleLogin = () => {
  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (googleError) {
      const errorMessage = googleError?.message.split(":")[1];
      toast.error(errorMessage);
    }
  }, [googleError]);
  if (token) {
    navigate(from, { replace: true });
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        toast.success("User Login SuccessFull");
      }, 1000);
    }
  }, [user, from, navigate]);
  if (googleLoading) {
    return <Spinner />;
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
