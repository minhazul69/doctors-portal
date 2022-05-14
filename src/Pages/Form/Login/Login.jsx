import React from "react";
import GoogleLogin from "../GoogleLogin";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-screen my-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center font-bold text-xl">Login</h2>
          <div class="divider">OR</div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
