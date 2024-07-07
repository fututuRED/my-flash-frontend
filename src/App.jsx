import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CreateStoryPage from "./pages/CreateStoryPage";
import IsLoggedOut from "./components/Routing/isLoggedOut";
import IsLoggedIn from "./components/Routing/isLoggedIn";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<IsLoggedOut />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<IsLoggedIn />}>
            <Route path="/create-story" element={<CreateStoryPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
