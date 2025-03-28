import React from "react";
import { useAuth } from "../auth/AuthProvider";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {user ? (
        <>
          <p className="text-lg">Welcome, {user.name}!</p>
          <p className="mt-2 text-gray-600">{user.email}</p>
        </>
      ) : (
        <p className="text-lg">Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
