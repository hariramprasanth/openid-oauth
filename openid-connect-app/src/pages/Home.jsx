import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to MyAuthApp</h2>
      <p className="text-lg mb-4">Sign in to access the dashboard.</p>
      <Link to="/login">
        <button className="p-2 bg-blue-500 text-white rounded">Login</button>
      </Link>
    </div>
  );
};

export default Home;
