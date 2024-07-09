import { NavLink } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/AuthContextWrapper"; // <== IMPORT
import "../style/Nav.css";
function Navbar() {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);

  // Add debug logging to check the context value

  // Ensure contextValue is not undefined or null

  return (
    <ul className="nav-bar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/stories">Stories</NavLink>
      </li>
      {/* <li>
        <NavLink to="/story">Story</NavLink>
      </li> */}
      {isLoggedIn && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/create-story">Create</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={disconnect}>
              Logout
            </NavLink>
          </li>
        </>
      )}
      {!isLoggedIn && (
        <>
          <li>
            {" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
