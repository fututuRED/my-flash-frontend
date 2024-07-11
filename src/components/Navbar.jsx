import { NavLink } from "react-router-dom";
import { useContext } from "react"; //
import { AuthContext } from "../context/AuthContextWrapper";
import "../style/Nav.css";
function Navbar() {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);

  return (
    <ul className="nav-bar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/stories">Stories</NavLink>
      </li>
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
