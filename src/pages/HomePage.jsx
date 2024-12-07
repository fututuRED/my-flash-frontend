import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import Login from "../components/Login";

import "../style/Home.css";
function HomePage() {
  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <h1>
            SHORT
            <br />
            <AiOutlineThunderbolt />
            so
            <AiOutlineThunderbolt />
            <br />
            short
          </h1>
          <p>
            Ever wanted to be a writer? Here is a platform where you can write a
            short piece of fiction and share it
            <br />
            Anything that comes to mind... Write it down!
          </p>
          <Login />
        </div>
      </div>
    </>
  );
}

export default HomePage;
