import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
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
            Ever wanted to write?
            <br /> Here is a platform where you can write a short
            <br /> short
            <br /> piece Anything that comes to mind
            <br /> Write it down!
          </p>

          <ul className="rules">
            <p>Here's a few rules</p>
            <li>Respect and watch out what you write</li>
            <li>
              Write from 1 word to a short-fiction piece of about 300 words...
            </li>
          </ul>

          <p>
            Sounds doable?
            <br />
            <br />
            <br /> To give you an idea, check
            <br />
            <Link to="/stories" className="otherlink">
              <strong>Stories</strong>
            </Link>
            <br />
            <br />
            Need a little more info
            <br />
            <Link to="/about" className="otherlink">
              <strong>About</strong>
            </Link>
          </p>

          <p>
            <h3>An account?</h3>
            <Link to="/signup" className="signlink">
              <strong>SignUp!</strong>
            </Link>
            <br />
            <br />
            <h3>An account already:</h3>
            <Link to="/login" className="loglink">
              <strong>LogIn!</strong>
            </Link>
          </p>
        </div>
        <footer>
          <div className="footer">
            <h4>About Me</h4>

            <img
              src="https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg"
              alt="Avatar"
              className="avatar"
            />
            <p>
              Hello! Im Reda, a passionate developer. Feel free to have a look
              at these:
            </p>
            <a
              href="www.linkedin.com/in/reda-d-76b0942b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/fututuRED"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
