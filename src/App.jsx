import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateStoryPage from "./pages/CreateStoryPage";
import PublicStoriesPage from "./pages/PublicStoriesPage";
import ProfilePage from "./pages/ProfilePage";
import StoryPage from "./pages/StoryPage";
import ErrorPage from "./pages/ErrorPage";
import IsLoggedOut from "./components/Routing/isLoggedOut";
import IsLoggedIn from "./components/Routing/isLoggedIn";
import "@picocss/pico";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const defaultTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(defaultTheme);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const hideNavbarRoutes = ["/signup", "/login", "/home", "/create-story"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <div className="App">
        <Navbar
          hidden={shouldHideNavbar}
          heme={theme}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<PublicStoriesPage />} />
          <Route path="/stories/:id" element={<StoryPage />} />

          <Route element={<IsLoggedOut />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<IsLoggedIn />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-story" element={<CreateStoryPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
