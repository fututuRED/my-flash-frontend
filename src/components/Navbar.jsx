import { NavLink } from "react-router-dom";
import { useContext } from "react"; //
import { AuthContext } from "../context/AuthContextWrapper";

import "../style/Nav.css";
function Navbar({ hidden }) {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);

  return (
    <ul className={`nav-bar ${hidden ? "hidden-navbar" : ""}`}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/stories">Stories</NavLink>
      </li>
      {!isLoggedIn ? (
        <>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/create-story">Create</NavLink>
          </li>
          <li>
            <button onClick={disconnect}>Logout</button>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
