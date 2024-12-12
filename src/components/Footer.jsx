import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../style/Home.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <p>©2024 Short-so-short. Site designed by Reda.</p>
          <p>
            <AiOutlineThunderbolt />
            <br />
            About Me
            <br />
            <a
              href="https://www.linkedin.com/in/reda-d-76b0942b9"
              target="_blank"
              rel="noopener noreferrer"
              alt="linkedin-link"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/fututuRED"
              target="_blank"
              rel="noopener noreferrer"
              alt="github-link"
            >
              <FaGithub className="icon" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
