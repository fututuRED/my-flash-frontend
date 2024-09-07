import { NavLink } from "react-router-dom";
import { useContext } from "react"; //
import { AuthContext } from "../context/AuthContextWrapper";

import "../style/Nav.css";
function Navbar({ hidden, theme, toggleTheme }) {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);

  return (
    <nav
      className={`nav-bar ${hidden ? "hidden-navbar" : ""}`}
      aria-hidden={hidden}
    >
      <ul>
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
        <li className="theme-toggle">
          <input
            onChange={toggleTheme}
            name="opt-in"
            type="checkbox"
            id="swutch"
            role="switch"
            checked={theme === "dark"}
            className="toggle-btn"
          />
          <label htmlFor="switch" className="theme">
            Toggle Dark/Light Mode
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
