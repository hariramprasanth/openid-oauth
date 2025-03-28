import React, { createContext, useContext, useEffect, useState } from "react";
import { googleAuth } from "./authConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const googleUser = await googleAuth.getUser();
        if (googleUser) {
          setUser({
            name: googleUser.profile.name,
            email: googleUser.profile.email,
          });

          setTimeout(() => logout(), googleUser.expires_in * 1000);
        }
      } catch (error) {
        console.error("Error checking user session:", error);
        logout(); // Ensure user is logged out locally on error
      }
    };

    checkUserSession();
  }, []);

  const logout = () => {
    googleAuth.signoutRedirect();
    setUser(null); // Clear user state locally
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
