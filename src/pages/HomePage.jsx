import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import "../style/Home.css";
function HomePage() {
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <h1>
            SHORT
            <AiOutlineThunderbolt />
            so
            <AiOutlineThunderbolt /> short{" "}
          </h1>
          <p>
            Ever wanted to be a writer?
            <br /> Here is a platform where you can write a short piece of
            fiction and share it
            <br />
            Anything that comes to mind...
            <br /> Write it down!
          </p>
          <LoginPage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
