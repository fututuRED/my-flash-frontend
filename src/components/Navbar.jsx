import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import "../style/Home.css";

function Navbar({ theme, toggleTheme }) {
  const { user, isLoggedIn, disconnect } = useContext(AuthContext);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="nav-container">
      <button className="nav-toggle" onClick={handleToggle}>
        <GiHamburgerMenu />
      </button>

      <nav className={`nav-bar ${isNavVisible ? "visible" : " "}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/stories">Stories</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/create-story">Create</NavLink>
              </li>
              <li>
                <button onClick={disconnect}>Logout</button>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </>
          )}
          <li className="theme-toggle">
            <input
              onChange={toggleTheme}
              name="opt-in"
              type="checkbox"
              id="switch"
              role="switch"
              checked={theme === "dark"}
              className="toggle-btn"
            />
            <label htmlFor="switch" className="theme">
              Dark/Light Mode
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
