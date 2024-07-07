import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../auth.context"; // <== IMPORT

function Navbar() {
  const contextValue = useContext(AuthContext);

  // Add debug logging to check the context value
  console.log("Context Value: ", contextValue);

  // Ensure contextValue is not undefined or null
  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { isLoggedIn, user } = useContext(AuthContext);
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  // const { user } = useContext(AuthContext); // <== ADD

  //  Update the rendering logic to display different content
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
