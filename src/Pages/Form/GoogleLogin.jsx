import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <button onClick={() => signInWithGoogle()} class="btn btn-outline w-full">
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;
