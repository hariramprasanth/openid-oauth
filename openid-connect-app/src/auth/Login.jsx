import React from "react";
import { googleAuth } from "./authConfig";

const Login = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <button onClick={() => googleAuth.signinRedirect()} className="p-2 bg-red-500 text-white rounded mb-2">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
