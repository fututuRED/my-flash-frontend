import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextWrapper";
import { Navigate, Outlet } from "react-router-dom";

function IsLoggedIn() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
}

export default IsLoggedIn;
