import React from "react";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl">MyAuthApp</h1>
      {user ? (
        <div className="flex items-center">
          <span className="mr-4">Hello, {user.name} 👋</span>
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;

