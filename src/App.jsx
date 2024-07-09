import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateStoryPage from "./pages/CreateStoryPage";
import PublicStoriesPage from "./pages/PublicStoriesPage";
import ProfilePage from "./pages/ProfilePage";
import StoryPage from "./pages/StoryPage";
import IsLoggedOut from "./components/Routing/isLoggedOut";
import IsLoggedIn from "./components/Routing/isLoggedIn";
import "@picocss/pico";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const defaultTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(defaultTheme);
  useEffect(() => {
    // Apply the theme to the document element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <div className="App">
        <Navbar />
        <li className="toggle">
          <a
            href="#"
            role="button"
            className="outline secondary"
            onClick={toggleTheme}
          >
            Toggle dark mode
          </a>
        </li>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<IsLoggedOut />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="/stories" element={<PublicStoriesPage />} />

          <Route path="/stories/:id" element={<StoryPage />} />

          <Route element={<IsLoggedIn />}>
            <Route path="/create-story" element={<CreateStoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
