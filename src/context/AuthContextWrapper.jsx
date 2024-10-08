import React from "react";
import { useState, useEffect } from "react";
import service from "../assets/service/api";

export const AuthContext = React.createContext();

function AuthContextWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  async function authenticateUser() {
    try {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await service.get("/auth/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(response.data);
      setIsLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(
        "Authentication error: ",
        error.response ? error.response.data : error.message
      );
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);

      console.log(error);
    }
  }
  function disconnect() {
    removeToken();
    authenticateUser();
  }

  const contextValues = {
    user,
    storeToken,
    removeToken,
    authenticateUser,
    isLoading,
    isLoggedIn,
    disconnect,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
