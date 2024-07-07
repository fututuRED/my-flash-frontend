import { createContext, useState, useEffect } from "react";
import service from "../assets/service/api";
export const AuthContext = createContext();

function AuthContextWrapper({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeToken = (token) => localStorage.setItem("authToken", token);
  const removeToken = () => localStorage.removeItem("authToken");

  useEffect(() => {
    authenticateUser();
  }, []);

  async function authenticateUser() {
    try {
      const token = localStorage.getItem("authToken");
      console.log("Token being sent: ", token);
      if (!token) {
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await service.get("/auth/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response from server: ", response.data);
      setUser(response.data);
      setIsLoading(false);
      setIsLoggedIn(true);

      console.log(response);
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
